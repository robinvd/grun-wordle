export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const WIN_MESSAGES = ['Goud doan!', 'Kon minder', 'Nait verkeerd!']
export const GAME_COPIED_MESSAGE = 'Spel gekopieerd naar klembord'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Niet genoeg letters'
export const WORD_NOT_FOUND_MESSAGE = 'Woord niet gevonden'
export const HARD_MODE_ALERT_MESSAGE = 'Hard Mode kan alleen aan het begin worden ingeschakeld!'
export const HARD_MODE_DESCRIPTION = 'Alle onthulde hints moeten worden gebruikt in volgende pogingen'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Voor verbeterde kleurenvisie'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Het woord was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Moet ${guess} gebruiken op positie ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Gok moet de letter ${letter} bevatten`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Verwijderen'
export const STATISTICS_TITLE = 'Statistieken'
export const GUESS_DISTRIBUTION_TEXT = 'Verdeling aantal gokken'
export const NEW_WORD_TEXT = 'Nieuw woord over'
export const SHARE_TEXT = 'Delen'
export const SHARE_FAILURE_TEXT = 'Resultaten kunnen niet worden gedeeld. Deze functie is alleen beschikbaar in beveiligde contexten (HTTPS) en in sommige of alle ondersteunende browsers.'
export const MIGRATE_BUTTON_TEXT = 'Overzetten'
export const MIGRATE_DESCRIPTION_TEXT = 'Klik hier om je statistieken over te zetten naar een nieuw apparaat.'
export const TOTAL_TRIES_TEXT = 'Totaal aantal pogingen'
export const SUCCESS_RATE_TEXT = 'Succes'
export const CURRENT_STREAK_TEXT = 'Huidige reeks'
export const BEST_STREAK_TEXT = 'Beste reeks'
export const DISCOURAGE_INAPP_BROWSER_TEXT = "Je gebruikt een embedded browser en kunt problemen ondervinden bij het delen of opslaan van je resultaten. We raden je aan om in plaats daarvan de standaardbrowser van je apparaat te gebruiken."

export const DATEPICKER_TITLE = 'Kies een datum in het verleden'
export const DATEPICKER_CHOOSE_TEXT = 'Kiezen'
export const DATEPICKER_TODAY_TEXT = 'vandaag'
export const ARCHIVE_GAMEDATE_TEXT = 'Speldatum'
