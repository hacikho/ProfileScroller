//Init User
const user = new User();

//Call first profile
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display
function nextProfile() {
    user.getUser().then(currentProfile => {

            if (currentProfile !== undefined) {
                //console.log(currentProfile.results[0].name.first);
                document.getElementById('profileDisplay').innerHTML = `
                 <ul class="list-group">
                     <li class="list-group-item">Name: ${currentProfile.results[0].name.first}, 
                      ${currentProfile.results[0].name.last}</li>
                     <li class="list-group-item">Age: ${currentProfile.results[0].dob.age}</li>
                     <li class="list-group-item">Location: ${currentProfile.results[0].location.city}, 
                     ${currentProfile.results[0].location.state}</li>
                     <li class="list-group-item">Gender: ${currentProfile.results[0].gender}</li>
                 </ul>
                 `;

                document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.results[0].picture.large}">`;
            } else {
                //No more profiles
                window.location.reload();
            }

        })
        .catch(err => console.log(err));
}

//Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false
            } : {
                done: true
            }
        }
    };
}