# Custom Functions For Special Operators

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
