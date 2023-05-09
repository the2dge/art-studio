$(document).ready(function () {
  $("#feedback-form").on("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      rating: $("#rating").val(),
      comments: $("#comments").val(),
    };

    // Send form data to the Lambda function using API Gateway
    $.ajax({
      url: 
"https://yercz22rs6iyqys6rnm7jwqgca0gyzbp.lambda-url.us-east-1.on.aws/",
      type: "POST",
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: function (response) {
        alert("Thank you for your feedback!");
        $("#feedback-form")[0].reset();
      },
      error: function (error) {
        console.error("Error:", error);
        alert("There was an error submitting your feedback. Please try 
again.");
      },
    });
  });
});
