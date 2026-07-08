

library(tidyverse)
library(lme4)
library(lmerTest)
library(stringi)
library(dplyr)
library(stringr)
library(readr)
library(purrr)

# rejoining 

task <- read.csv("../data/data_expl_exclusions.csv")
leap <- read.csv("../data/processed_lq.csv")

df <- left_join(task, leap, by = "Participant")

write.csv(df, "../data/data_expl_exclusions_with_leap_i_think.csv", row.names = FALSE)

# participants 76 has 2X the data because the same IP address uploaded 2x
# this needs to be fixed in earlier parts of the code

# I am just removing for now, but we should go back and re-do 
df <- subset(df, Participant != 76)


# Helper: safely turn messy values into numbers
num <- function(x) {
  parse_number(as.character(x))
}

duration_years <- function(years, months) {
  y <- num(years)
  m <- num(months)
  
  out <- y + (m / 12)
  
  # The questionnaire asked for duration, not calendar year.
  # Values like 1995 or 2003 are invalid as durations, so these are set to NA
  out[y > 100 | m > 11] <- NA_real_
  
  out
}

# Helper: normalise language text
clean_lang <- function(x) {
  x %>%
    as.character() %>%
    stringi::stri_trans_general("Latin-ASCII") %>%
    str_to_lower() %>%
    str_squish()
}

is_italian <- function(x) {
  str_detect(clean_lang(x), "ital|italiano|italiana")
}

is_english <- function(x) {
  str_detect(clean_lang(x), "engl|english|ingl|ingles")
}
# Helper: for slot-based percentage questions.
# Example: if exp_lang_3 = "Italian", this pulls exp_pct_3.
get_lang_pct <- function(df, lang_prefix, pct_prefix, target = c("italian", "english")) {
  target <- match.arg(target)
  
  lang_cols <- paste0(lang_prefix, 1:5)
  pct_cols  <- paste0(pct_prefix, 1:5)
  
  matcher <- if (target == "italian") is_italian else is_english
  
  matched <- map2_dfc(lang_cols, pct_cols, function(lang_col, pct_col) {
    ifelse(matcher(df[[lang_col]]), num(df[[pct_col]]), NA_real_)
  })
  
  n_matches <- rowSums(!is.na(matched))
  out <- rowSums(matched, na.rm = TRUE)
  out[n_matches == 0] <- 0
  
  out
}

# One LEAP row per participant.
df_part <- df %>%
  distinct(Participant, .keep_all = TRUE)

df_leap_clean <- df_part %>%
  transmute(
    Participant,
    
    # Italian / L2 slot-matched general percentages
    use_pct = get_lang_pct(
      df_part,
      "LQ_exp_lang_",
      "LQ_pcibex_log_exp_pct_",
      "italian"
    ),
    
    choice_read_pct = get_lang_pct(
      df_part,
      "LQ_read_lang_",
      "LQ_pcibex_log_read_pct_",
      "italian"
    ),
    
    choice_speak_pct = get_lang_pct(
      df_part,
      "LQ_speak_lang_",
      "LQ_pcibex_log_speak_pct_",
      "italian"
    ),
    
    # Italian / L2 age variables
    aoa = num(LQ_pcibex_log_ita_age_began_acquiring),
    aoa_fluent = num(LQ_pcibex_log_ita_age_became_fluent),
    aoa_reading = num(LQ_pcibex_log_ita_age_began_reading),
    aoa_reading_fluent = num(LQ_pcibex_log_ita_age_became_fluent_reading),
    
    # Italian / L2 immersion variables: years + months / 12
    immers_country = duration_years(
      LQ_pcibex_log_ita_country_years,
      LQ_pcibex_log_ita_country_months
    ),
    
    immers_family = duration_years(
      LQ_pcibex_log_ita_family_years,
      LQ_pcibex_log_ita_family_months
    ),
    
    immers_school = duration_years(
      LQ_pcibex_log_ita_schoolwork_years,
      LQ_pcibex_log_ita_schoolwork_months
    ),
    
    # Italian / L2 proficiency, 0-10
    prof_speak = num(LQ_pcibex_log_ita_proficiency_speaking),
    prof_read = num(LQ_pcibex_log_ita_proficiency_reading),
    prof_listen = num(LQ_pcibex_log_ita_proficiency_understanding),
    
    # Italian / L2 learning-source ratings, 0-10
    learn_friends = num(LQ_pcibex_log_ita_learning_friends),
    learn_family = num(LQ_pcibex_log_ita_learning_family),
    learn_self = num(LQ_pcibex_log_ita_learning_self),
    learn_reading = num(LQ_pcibex_log_ita_learning_reading),
    learn_tv = num(LQ_pcibex_log_ita_learning_tv),
    learn_radio = num(LQ_pcibex_log_ita_learning_radio),
    
    # Italian / L2 current exposure/use-context ratings, 0-10
    use_friends = num(LQ_pcibex_log_ita_exposure_friends),
    use_family = num(LQ_pcibex_log_ita_exposure_family),
    use_self = num(LQ_pcibex_log_ita_exposure_lab_self),
    use_reading = num(LQ_pcibex_log_ita_exposure_reading),
    use_tv = num(LQ_pcibex_log_ita_exposure_tv),
    use_radio = num(LQ_pcibex_log_ita_exposure_radio_music),
    
    # Italian / L2 accent variables, 0-10
    accent_self = num(LQ_pcibex_log_ita_foreign_accent),
    accent_others = num(LQ_pcibex_log_ita_identified_non_native),
    
    
    # English / L1 equivalents
    
    L1_use_pct = get_lang_pct(
      df_part,
      "LQ_exp_lang_",
      "LQ_pcibex_log_exp_pct_",
      "english"
    ),
    
    L1_choice_read_pct = get_lang_pct(
      df_part,
      "LQ_read_lang_",
      "LQ_pcibex_log_read_pct_",
      "english"
    ),
    
    L1_choice_speak_pct = get_lang_pct(
      df_part,
      "LQ_speak_lang_",
      "LQ_pcibex_log_speak_pct_",
      "english"
    ),
    
    L1_aoa = num(LQ_pcibex_log_eng_age_began_acquiring),
    L1_aoa_fluent = num(LQ_pcibex_log_eng_age_became_fluent),
    L1_aoa_reading = num(LQ_pcibex_log_eng_age_began_reading),
    L1_aoa_reading_fluent = num(LQ_pcibex_log_eng_age_became_fluent_reading),
    
    L1_immers_country = duration_years(
      LQ_pcibex_log_eng_country_years,
      LQ_pcibex_log_eng_country_months
    ),
    
    L1_immers_family = duration_years(
      LQ_pcibex_log_eng_family_years,
      LQ_pcibex_log_eng_family_months
    ),
    
    L1_immers_school = duration_years(
      LQ_pcibex_log_eng_schoolwork_years,
      LQ_pcibex_log_eng_schoolwork_months
    ),
    
    L1_prof_speak = num(LQ_pcibex_log_eng_proficiency_speaking),
    L1_prof_read = num(LQ_pcibex_log_eng_proficiency_reading),
    L1_prof_listen = num(LQ_pcibex_log_eng_proficiency_understanding),
    
    L1_learn_friends = num(LQ_pcibex_log_eng_learning_friends),
    L1_learn_family = num(LQ_pcibex_log_eng_learning_family),
    L1_learn_self = num(LQ_pcibex_log_eng_learning_self),
    L1_learn_reading = num(LQ_pcibex_log_eng_learning_reading),
    L1_learn_tv = num(LQ_pcibex_log_eng_learning_tv),
    L1_learn_radio = num(LQ_pcibex_log_eng_learning_radio),
    
    L1_use_friends = num(LQ_pcibex_log_eng_exposure_friends),
    L1_use_family = num(LQ_pcibex_log_eng_exposure_family),
    L1_use_self = num(LQ_pcibex_log_eng_exposure_lab_self),
    L1_use_reading = num(LQ_pcibex_log_eng_exposure_reading),
    L1_use_tv = num(LQ_pcibex_log_eng_exposure_tv),
    L1_use_radio = num(LQ_pcibex_log_eng_exposure_radio_music),
    
    L1_accent_self = num(LQ_pcibex_log_eng_foreign_accent),
    L1_accent_others = num(LQ_pcibex_log_eng_identified_non_native)
  )

df <- left_join(df, df_leap_clean, by = "Participant")

write.csv(df, "../data/combined_leap_MS_jun02.csv", row.names = FALSE)