// URL of the hosted API
export const apiUrl = "http://localhost:8000"

// generates options for fetch calls
export const fetchOptions = (method, body) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  }

  if (!!body) {
    options.body = JSON.stringify(body)
  }

  return options
}

// checks if given object is empty
export const isEmptyObject = (obj) => {
  if (JSON.stringify(obj) === "{}") {
    return true
  }
  return false
}

// converts YYYY-MM-DD to MM/DD/YYYY
export const formatDate = (date) => {
  const newDate = new Date(date.replace(/-/g, "/"))
  return `${newDate.getMonth() + 1}/${newDate.getDate()}/${newDate.getFullYear()}`
}

// sorts given array alphabetically based on given key
export const sortAlphabetically = (array, key) => {
  return array.sort((a, b) => a[key].localeCompare(b[key]))
}
