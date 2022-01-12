const LinksSocialMedia = {
  github: '',
  youtube: '',
  facebook: '',
  instagram: '',
  twitter: ''
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //document.getElementById('userName').textContent = data.nameR
      if (data.login) {
        userAvatar.src = data.avatar_url
        userUrl.href = data.html_url
        userLogin.textContent = data.login
        userName.textContent = data.name
        userBio.textContent = data.bio
      }
    })
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    //li.children[0].href += linksSocialMedia[social]
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

getGitHubProfileInfos()
changeSocialMediaLinks()
