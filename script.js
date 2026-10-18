const dailyPhotos = [120, 250, 45, 320, 30, 180, 210];

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function filterHighActivityDays(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 200) {
      result.push(arr[i]);
    }
  }
  return result;
}

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function runPhotoAnalysis() {
  const userNameInput = prompt("Введите ваше имя:", "Елена");
  const userName = userNameInput && userNameInput.trim() ? userNameInput.trim() : "Гость";

  let lowDaysCount = 0;

  for (let i = 0; i < dailyPhotos.length; i++) {
    if (dailyPhotos[i] <= 50) {
      lowDaysCount++;
    }
  }

  const lowDaysPercent = dailyPhotos.length > 0 ? (lowDaysCount / dailyPhotos.length) * 100 : 0;
  const totalPhotos = calculateSum(dailyPhotos);
  const highDays = filterHighActivityDays(dailyPhotos);
  const maxPhotos = findMax(dailyPhotos);

  const roundedLowPercent = Number(lowDaysPercent.toFixed(1));

  alert(`Привет, ${userName}! Всего сделано ${totalPhotos} фото, в ${highDays.length} днях активность была высокой.`);

  console.log(`Процент дней с малой активностью: ${roundedLowPercent}%`);
  console.log(`Количество дней с малой активностью: ${lowDaysCount}`);

  if (maxPhotos > 300) {
    console.log("В этот день вы были особенно продуктивны!");
  }
}

const analyzeButton = document.getElementById("analyze-btn");
if (analyzeButton) {
  analyzeButton.addEventListener("click", runPhotoAnalysis);
} else {
  console.error("Элемент не найден: #analyze-btn");
}
