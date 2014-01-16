$(function() {
  // Validate the contact form
  $('#reservationform').validate({
    // Specify what the errors should look like
    // when they are dynamically added to the form
    errorElement: "label",
    wrapper: "td",
    errorPlacement: function(error, element) {
      error.insertBefore( element.parent().parent() );
      error.wrap("<tr class='error'></tr>");
      $("<td></td>").insertBefore(error);
    },
 
    // Add requirements to each of the fields
    rules: {
      name: {
        required: true,
        minlength: 1
      },
      email: {
        required: true,
        email: true
      },
      pid: {
        required: true,
       // equalTo: "guest42"
      },
      startdt: {
      	  required: true,
      	  range: [478000, 479999]
      },
      enddt: {
      	  required: true,
      	  range: [478000, 479999]
      }
    },
 
    // Specify what error messages to display
    // when the user does something horrid
    messages: {
      name: {
        required: "Please enter your name.",
        minlength: jQuery.format("At least {0} characters required.")
      },
      email: {
        required: "Please enter your email.",
        email: "Please enter a valid email."
      },
      pid: {
        required: "Please enter your Pinafore Id.",
        equalTo: "must be 'guest42'."
      },
      startdt: {
      	  required: "Please enter the start date.",
      	  range: "must be between 478000 and 479999."
      },
      enddt: {
      	  required: "Please enter the end date.",
      	  range: "must be between Start date and 479999."
      }
 
    },
 
    // Use Ajax to send everything to processForm.php
    submitHandler: function(form) {
      $("#send").attr("value", "Sending...");
      $(form).ajaxSubmit({
        target: "#response",
        success: function(responseText, statusText, xhr, $form) {
          $(form).slideUp("fast");
          $("#response").html(responseText).hide().slideDown("fast");
        }
      });
      return false;
    }
  });
});