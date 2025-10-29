// Task 0: Setup
$(document).ready(function() {
  console.log("jQuery is ready!");

  // Task 1: Selectors & CSS
  $("#changeTextBtn").click(function() {
    $("#titleText").text("changed with jQuery!");
    $(".description").html("<b>this paragraph was modified!</b>");
    $("h2").css("color", "#1b644f");
  });

  // Task 2: Visibility Methods
  $("#hideBtn").click(function() { $("#paragraph").hide(); });
  $("#showBtn").click(function() { $("#paragraph").show(); });
  $("#toggleBtn").click(function() { $("#paragraph").toggle(); });

  // Task 3: Fade Methods
  $("#fadeOutBtn").click(function() { $("#fadeImage").fadeOut(); });
  $("#fadeInBtn").click(function() { $("#fadeImage").fadeIn(); });
  $("#fadeToggleBtn").click(function() { $("#fadeImage").fadeToggle(); });

  // Task 4: Slide Methods
  $("#slideToggleBtn").click(function() { $("#panel").slideToggle(); });

  // Task 5: Add / Remove Elements
  $("#addItem").click(function() {
    $("#myList").append("<li>New item</li>");
  });
  $("#removeItem").click(function() {
    $("#myList li:last").remove();
  });

  // Task 6: Modifying Attributes
  $("#changeImage").click(function() {
    $("#changePic").attr("src", "cat.jpg").attr("alt", "cat");
  });
  $("#changeLink").click(function() {
    $("#myLink").attr("href", "https://github.com/derqqx?tab=repositories").text("Go to my github");
  });

  // Task 7: Form Interaction
  $("input").keyup(function() {
    let name = $("#nameInput").val();
    let email = $("#emailInput").val();
    $("#liveOutput").text("Name: " + name + " | Email: " + email);
  });

  // Task 8–10: Animations
  $("#animateBtn").click(function() {
    $("#box").animate({ left: "200px", width: "150px", height: "150px" }, 1000);
  });
  $("#sequenceBtn").click(function() {
    $("#box")
      .animate({ left: "200px" }, 600)
      .animate({ top: "150px" }, 600)
      .animate({ width: "50px", height: "50px" }, 600)
      .animate({ left: "0", top: "0", width: "100px", height: "100px" }, 600);
  });

  // Task 11: Accordion
  $(".accordion-header").click(function() {
    $(this).next(".accordion-content").slideToggle();
    $(".accordion-content").not($(this).next()).slideUp();
  });
});
