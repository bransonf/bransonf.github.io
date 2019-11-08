# My Custom R functions//

# Add Strings together
`%+%` <- function(lhs, rhs){
  paste0(lhs, rhs)
}

# Remove from String
`%-%` <- function(lhs, rhs){
  stringr::str_remove(lhs, rhs)
}

# Test for Not-In-Ness
`%nin%` <- function(lhs, rhs){
  !lhs %in% rhs
}

# Password Protected YAML (Interactive)
encrypt_yaml <- function(file){
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


