const Portfolio = (function () {
  function makeWords() {
    var words = [
      {
        text: "React",
        weight: 12.3,
      },
      {
        text: "css3",
        weight: 8,
      },
      {
        text: "Solidworks",
        weight: 10,
      },

      {
        text: "javascript",
        weight: 14,
      },
      {
        text: "jquery",
        weight: 3,
      },
      {
        text: "programming",
        weight: 7,
      },
      {
        text: "python",
        weight: 10,
      },
      {
        text: "Mechanical Design",
        weight: 9,
      },
      {
        text: "Andres",
        weight: 15,
      },
      {
        text: "Hands-On",
        weight: 7,
      },
      {
        text: "3DExperince",
        weight: 11,
      },
      {
        text: "MySQL",
        weight: 5,
      },
      {
        text: "GD&T",
        weight: 6,
      },
    ];
    return words;
  }

  function makeWordCloud(words) {
    $(".teaching-domains").jQCloud(words, { delay: 120 });
  }

  function displayWordCloud() {
    var count = 1;
    $(window).on("scroll", function () {
      var y_scroll_pos = window.pageYOffset;
      var scroll_pos_test = 2700; // set to whatever you want it to be
      var words = makeWords();
      if (y_scroll_pos > scroll_pos_test && count <= 1) {
        makeWordCloud(words);
        count++;
      }
    });
  }

  function designForm() {
    $("#my-modal form").addClass("my-form");
  }

  function typeAnimation() {
    Typed.new("#writing-text", {
      strings: [
        "am a Mechanical Engineer.",
        "am a Full-Stack Web Developer.",
        "love everything about engineering.",
        "enjoy challenges",
        "solve problems.",
      ],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 1,
      contentType: "text",
      callback: function () {
        $("#writing-text").css({
          color: "#fff",
          "background-color": "#C8412B",
        });
      },
      preStringTyped: function () {},
      onStringTyped: function () {},
    });
  }

  return {
    displayWordCloud: displayWordCloud,
    typeAnimation: typeAnimation,
  };
})();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();
