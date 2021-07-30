$(function () {
  $(
    "#contactForm input,#contactForm textarea,#contactForm button"
  ).jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var nombre = $("input#nombre").val();
      var correo = $("input#correo").val();
      var asunto = $("input#asunto").val();
      var mensaje = $("textarea#mensaje").val();
      var firstName = nombre; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(" ") >= 0) {
        firstName = nombre.split(" ").slice(0, -1).join(" ");
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "/assets/mail/contact_me.php",
        type: "POST",
        data: {
          nombre: nombre,
          asunto: asunto,
          correo: correo,
          mensaje: mensaje,
        },
        cache: false,
        success: function () {
          // Success message
          $("#success").html("<div class='alert alert-success'>");
          $("#success > .alert-success")
            .html(
              "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-hidden='true' style='margin: 1rem'>"
            )
            .append("</button>");
          $("#success > .alert-success").append(
            "<strong>Tu mensaje ha sido enviado. </strong>"
          );
          $("#success > .alert-success").append("</div>");
          //clear all fields
          $("#contactForm").trigger("reset");
        },
        error: function () {
          // Fail message
          $("#success").html("<div class='alert alert-danger'>");
          $("#success > .alert-danger")
            .html(
              "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-hidden='true' style='margin: 1rem'>"
            )
            .append("</button>");
          $("#success > .alert-danger").append(
            $("<strong>").text(
              "Disculpa " +
                firstName +
                ", parece ser que nuestros servidores no responden. Intenta más tarde."
            )
          );
          $("#success > .alert-danger").append("</div>");
          //clear all fields
          $("#contactForm").trigger("reset");
        },
        complete: function () {
          setTimeout(function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
  $("#success").html("");
});
