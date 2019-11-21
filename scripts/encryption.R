# Custom Function for Encryption

# Password Protect File
encryptFile <- function(file){
  pwd <- getPass::getPass('Password:\n')
  k <- sodium::sha256(charToRaw(pwd))
  key <- cyphr::key_sodium(k)
  cyphr::encrypt_file(file, key, dest = paste0(file, '.encrypted'))
  file.remove(file)
}

# Read Encrypted YAML (Interactive)
decrypt_yaml <- function(file){
  pwd <- getPass::getPass('Password:\n')
  k <- sodium::sha256(charToRaw(pwd))
  key <- cyphr::key_sodium(k)
  content <- cyphr::decrypt_file(file, key)
  return(yaml::read_yaml(text = rawToChar(content)))
}

# Read Encrypted CSV (Interactive)
decrypt_csv <- function(file){
  pwd <- getPass::getPass('Password:\n')
  k <- sodium::sha256(charToRaw(pwd))
  key <- cyphr::key_sodium(k)
  content <- cyphr::decrypt_file(file, key)
  return(readr::read_csv(file = rawToChar(content)))
}
