document.querySelector('.button-container').addEventListener('click', () => {
  let text = document.getElementById('filter-jobs').value;
  console.log(text);
});

function getJobs() {
  return fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

function showJobs(jobs) {
  let h1Element = document.querySelector('.jobs-list h1');
  h1Element.textContent = `Showing ${jobs.length} jobs`;
  let jobsContainer = document.querySelector('.jobs-container');
  let jobsHTML = '';
  jobs.forEach((job) => {
    jobsHTML += `<div class="job-tile">
    <div class="top">
      <img
        src="https://cdn-icons-png.flaticon.com/128/2942/2942821.png"
        alt="icon"
      />
      <span class="material-icons more_horiz"> more_horiz </span>
    </div>
    <div class="role-name">
      <span>${job.roleName}</span>
    </div>
    <div class="description">
      <span
        >${job.requirements.content}
      </span>
    </div>
    <div class="buttons">
      <div class="button apply-now">Apply Now</div>
      <div class="button">Message</div>
    </div>
  </div>`;
  });
  jobsContainer.innerHTML = jobsHTML;
}

getJobs().then((data) => {
  showJobs(data);
});
