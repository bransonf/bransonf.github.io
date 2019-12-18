# Custom Functions For Special Operators

# Redefine the Plus Sign in R
`+` <- function(lhs, rhs){
  if(is.character(lhs) | is.character(rhs)){
    warning('Character Method of `+` Used')
    return(paste0(lhs, rhs))
  }
  else if((is.numeric(lhs) | is.logical(lhs)) &
          (is.numeric(rhs) | is.logical(rhs))){
    return(.Primitive('+')(lhs, rhs))
  }
  else{
    stop('Unsupported Class of Method `+`')
  }
}

# Remove from String
`%-%` <- function(lhs, rhs){
  stringr::str_remove(lhs, rhs)
}

# Test for Not-In-Ness
`%nin%` <- function(lhs, rhs){
  !lhs %in% rhs
}
