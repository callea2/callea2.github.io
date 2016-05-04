describe("BMICalculator", function(){
  var bmi_calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    person_imperial = new Person({weight: 190, height: 73});
    calculator = new BMICalculator();
  });

  it("calculates BMI using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

  it("calculates BMI using imperial method", function() {
    calculator.imperial_bmi(person_imperial);
    expect(person_imperial.bmiValue).toEqual(25.06)
  })

});
