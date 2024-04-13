const form = document.getElementById('age-form');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const year = parseInt(document.getElementById('year').value);
  const month = parseInt(document.getElementById('month').value);
  const day = parseInt(document.getElementById('day').value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day); // Month is 0-indexed

  // Calculate age in years
  const ageInYears = today.getFullYear() - birthDate.getFullYear();

  // Check if birthday has passed in the current year
  const hasHadBirthdayThisYear = (today.getMonth() >= month - 1) && (today.getDate() >= day);

  let age;
  if (hasHadBirthdayThisYear) {
    age = ageInYears;
  } else {
    age = ageInYears - 1;
  }

  result.textContent = `Your age is ${age} years old.`;
});
