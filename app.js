function search() {
  let getValue = document.getElementById("iup").value.trim();
  document.getElementById("iup").value = "";

  // Validation for empty or non value
  if (getValue === "" || isNaN(getValue)) {
    document.getElementById("para").innerHTML = "Please enter a valid number.";
    document.getElementById("para").style.color = "orange";
    return; // Exit the function if validation fails
  }

  getValue = Number(getValue);

  // Logic to check positive, negative, or zero
  if (getValue > 0) {
    document.getElementById(
      "para"
    ).innerHTML = `${getValue} is a Positive Number`;
    document.getElementById("para").style.color = "blue";
  } else if (getValue < 0) {
    document.getElementById(
      "para"
    ).innerHTML = `${getValue} is a Negative Number`;
    document.getElementById("para").style.color = "red";
  } else {
    document.getElementById("para").innerHTML = `${getValue} is Zero`;
    document.getElementById("para").style.color = "green";
  }

  localStorage.setItem("user", getValue);
}
