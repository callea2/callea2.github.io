describe("Metric", function() {
  var person_metric;

  beforeEach(function() {
    person_metric = new Person({weight: 90, height: 186});
    person_metric.calculate_metric_bmi();
  });

  it("should have weight of 90", function() {
    expect(person_metric.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person_metric.height).toEqual(186);
  });

  it("should calculate BMI value", function(){
    expect(person_metric.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function(){
    expect(person_metric.bmiMessage).toEqual("'Overweight'")
  });
});

describe("Imperial", function() {
  var person_imperial;

  beforeEach(function() {
    person_imperial = new Person({weight: 190, height: 73});
    person_imperial.calculate_imperial_bmi();
  });

  it("should have weight of 190", function() {
    expect(person_imperial.weight).toEqual(190);
  });

  it("should have height of 73", function() {
    expect(person_imperial.height).toEqual(73);
  });

  it("should calculate BMI value", function(){
    expect(person_imperial.bmiValue).toEqual(25.06)
  });

  it("should have a BMI Message", function(){
    expect(person_imperial.bmiMessage).toEqual("'Overweight'")
  });
});
