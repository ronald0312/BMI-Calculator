function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight === "" || height === "") {
    document.getElementById("result").innerHTML = "Silahkan masukkan berat dan tinggi badan anda.";
  } else {
    const bmi = weight / ((height / 100) ** 2);
    let category = "";

    if (bmi < 18.5) {
      category = " BMI kamu menunjukkan Underweight, konsumsi makanan yang sehat dan jangan stress ya!";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "BMI kamu Normal weight, tetap konsisten ya!";
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "BMI kamu menunjukkan Overweight, olahraga yang teratur dan komsumsi makanan yang sehat ya";
    } else {
      category = "BMI kamu menunjukkan Obesity, harap jaga pola makan ya";
    }

    const resultText = `BMI = ${bmi.toFixed(1)}. ${category}`;
    document.getElementById("result").innerHTML = resultText;
  }
}
