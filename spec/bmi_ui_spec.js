describe('BMI_UI - index.html', function() {
  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    $.holdReady(false)

  });

  describe('metric method', function() {
    beforeEach(function() {
      $('#weight').val('90');
      $('#height').val('186');
      $('#calculate').trigger('click');
    });

    it("displays BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
      expect($('#display_message').text()).toBe("and your status is 'Overweight'");
    });
  });

  describe('imperial method', function() {
    beforeEach(function() {
      $('#myonoffswitch').click();
      $('#weight').val('190');
      $('#height').val('73');
      $('#calculate').trigger('click');
    });

    it("displays BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 25.06');
    });

    it("displays BMI Message", function() {
      expect($('#display_message').text()).toBe("and your status is 'Overweight'");
    });
  });





});
