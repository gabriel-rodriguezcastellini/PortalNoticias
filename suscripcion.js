document.addEventListener("DOMContentLoaded", function () {
  var fullNameInput = document.getElementById("full-name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm-password");
  var ageInput = document.getElementById("age");
  var phoneInput = document.getElementById("phone");
  var addressInput = document.getElementById("address");
  var cityInput = document.getElementById("city");
  var postalCodeInput = document.getElementById("postal-code");
  var dniInput = document.getElementById("dni");
  var submitButton = document.getElementById("submit-button");
  var formTitle = document.getElementById("form-title");

  function showError(input, message) {
    var errorElement = document.getElementById(input.id + "-error");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function hideError(input) {
    var errorElement = document.getElementById(input.id + "-error");
    errorElement.style.display = "none";
  }

  fullNameInput.onblur = function () {
    var value = fullNameInput.value.trim();
    if (value.length <= 6 || !/\s/.test(value)) {
      showError(
        fullNameInput,
        "El nombre completo debe tener más de 6 caracteres y contener un espacio."
      );
    }
  };
  fullNameInput.onfocus = function () {
    hideError(fullNameInput);
  };

  fullNameInput.addEventListener("keydown", function () {
    formTitle.textContent = "HOLA " + fullNameInput.value.trim();
  });

  emailInput.onblur = function () {
    var value = emailInput.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      showError(emailInput, "El email no es válido.");
    }
  };
  emailInput.onfocus = function () {
    hideError(emailInput);
  };

  passwordInput.onblur = function () {
    var value = passwordInput.value;
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
      showError(
        passwordInput,
        "La contraseña debe tener al menos 8 caracteres, formados por letras y números."
      );
    }
  };
  passwordInput.onfocus = function () {
    hideError(passwordInput);
  };

  confirmPasswordInput.onblur = function () {
    var passwordValue = passwordInput.value;
    var confirmPasswordValue = confirmPasswordInput.value;
    if (confirmPasswordValue !== passwordValue) {
      showError(confirmPasswordInput, "Las contraseñas no coinciden.");
    }
  };
  confirmPasswordInput.onfocus = function () {
    hideError(confirmPasswordInput);
  };

  ageInput.onblur = function () {
    var value = parseInt(ageInput.value, 10);
    if (isNaN(value) || value < 18) {
      showError(ageInput, "Debe ser mayor o igual a 18 años.");
    }
  };
  ageInput.onfocus = function () {
    hideError(ageInput);
  };

  phoneInput.onblur = function () {
    var value = phoneInput.value.trim();
    if (!/^\d{7,}$/.test(value)) {
      showError(
        phoneInput,
        "El teléfono debe tener al menos 7 dígitos sin espacios ni símbolos."
      );
    }
  };
  phoneInput.onfocus = function () {
    hideError(phoneInput);
  };

  addressInput.onblur = function () {
    var value = addressInput.value.trim();
    if (value.length < 5 || !/\d/.test(value) || !/\s/.test(value)) {
      showError(
        addressInput,
        "La dirección debe tener al menos 5 caracteres, incluyendo letras, números y un espacio."
      );
    }
  };
  addressInput.onfocus = function () {
    hideError(addressInput);
  };

  cityInput.onblur = function () {
    var value = cityInput.value.trim();
    if (value.length < 3) {
      showError(cityInput, "La ciudad debe tener al menos 3 caracteres.");
    }
  };
  cityInput.onfocus = function () {
    hideError(cityInput);
  };

  postalCodeInput.onblur = function () {
    var value = postalCodeInput.value.trim();
    if (value.length < 3) {
      showError(
        postalCodeInput,
        "El código postal debe tener al menos 3 caracteres."
      );
    }
  };
  postalCodeInput.onfocus = function () {
    hideError(postalCodeInput);
  };

  dniInput.onblur = function () {
    var value = dniInput.value.trim();
    if (!/^\d{7,8}$/.test(value)) {
      showError(dniInput, "El DNI debe tener 7 u 8 dígitos.");
    }
  };
  dniInput.onfocus = function () {
    hideError(dniInput);
  };

  submitButton.onclick = function (event) {
    var formIsValid = true;
    var errorMessages = [];

    if (
      fullNameInput.value.trim().length <= 6 ||
      !/\s/.test(fullNameInput.value)
    ) {
      showError(
        fullNameInput,
        "El nombre completo debe tener más de 6 caracteres y contener un espacio."
      );
      errorMessages.push("Nombre completo inválido.");
      formIsValid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      showError(emailInput, "El email no es válido.");
      errorMessages.push("Email inválido.");
      formIsValid = false;
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwordInput.value)) {
      showError(
        passwordInput,
        "La contraseña debe tener al menos 8 caracteres, formados por letras y números."
      );
      errorMessages.push("Contraseña inválida.");
      formIsValid = false;
    }
    if (confirmPasswordInput.value !== passwordInput.value) {
      showError(confirmPasswordInput, "Las contraseñas no coinciden.");
      errorMessages.push("Las contraseñas no coinciden.");
      formIsValid = false;
    }
    if (
      isNaN(parseInt(ageInput.value, 10)) ||
      parseInt(ageInput.value, 10) < 18
    ) {
      showError(ageInput, "Debe ser mayor o igual a 18 años.");
      errorMessages.push("Edad inválida.");
      formIsValid = false;
    }
    if (!/^\d{7,}$/.test(phoneInput.value.trim())) {
      showError(
        phoneInput,
        "El teléfono debe tener al menos 7 dígitos sin espacios ni símbolos."
      );
      errorMessages.push("Teléfono inválido.");
      formIsValid = false;
    }
    if (
      addressInput.value.trim().length < 5 ||
      !/\d/.test(addressInput.value) ||
      !/\s/.test(addressInput.value)
    ) {
      showError(
        addressInput,
        "La dirección debe tener al menos 5 caracteres, incluyendo letras, números y un espacio."
      );
      errorMessages.push("Dirección inválida.");
      formIsValid = false;
    }
    if (cityInput.value.trim().length < 3) {
      showError(cityInput, "La ciudad debe tener al menos 3 caracteres.");
      errorMessages.push("Ciudad inválida.");
      formIsValid = false;
    }
    if (postalCodeInput.value.trim().length < 3) {
      showError(
        postalCodeInput,
        "El código postal debe tener al menos 3 caracteres."
      );
      errorMessages.push("Código postal inválido.");
      formIsValid = false;
    }
    if (!/^\d{7,8}$/.test(dniInput.value.trim())) {
      showError(dniInput, "El DNI debe tener 7 u 8 dígitos.");
      errorMessages.push("DNI inválido.");
      formIsValid = false;
    }

    if (formIsValid) {
      var formData = {
        name: fullNameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value,
        age: ageInput.value.trim(),
        phone: phoneInput.value.trim(),
        address: addressInput.value.trim(),
        city: cityInput.value.trim(),
        postalCode: postalCodeInput.value.trim(),
        dni: dniInput.value.trim(),
      };

      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("La solicitud ha fallado.");
          }
          return response.json();
        })
        .then((data) => {
          showModal("Suscripción exitosa", JSON.stringify(data));
          localStorage.setItem("subscriptionData", JSON.stringify(data));
        })
        .catch((error) => {
          showModal("Error en la suscripción", error.message);
        });
    } else {
      event.preventDefault();
      var errorMessageStr = "Por favor, corrija los siguientes errores:\n\n";
      errorMessageStr += errorMessages.join("\n");
      alert(errorMessageStr);
    }
  };

  function showModal(title, message) {
    var modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <h2>${title}</h2>
        <p>${message}</p>
      </div>
    `;
    document.body.appendChild(modal);

    var closeButton = modal.querySelector(".close-button");
    closeButton.onclick = function () {
      modal.style.display = "none";
      document.body.removeChild(modal);
    };

    modal.style.display = "block";
    modal.style.position = "fixed";
    modal.style.zIndex = "1000";
    modal.style.left = "50%";
    modal.style.top = "50%";
    modal.style.transform = "translate(-50%, -50%)";
  }

  window.onload = function () {
    var storedData = localStorage.getItem("subscriptionData");
    if (storedData) {
      var parsedData = JSON.parse(storedData);
      fullNameInput.value = parsedData.name || "";
      emailInput.value = parsedData.email || "";
      passwordInput.value = "";
      confirmPasswordInput.value = "";
      ageInput.value = parsedData.age || "";
      phoneInput.value = parsedData.phone || "";
      addressInput.value = parsedData.address || "";
      cityInput.value = parsedData.city || "";
      postalCodeInput.value = parsedData.postalCode || "";
      dniInput.value = parsedData.dni || "";
    }
  };
});
