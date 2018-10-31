export const authService = {
  isAuthenticated: false,

  authenticate(data, cb) {
    fetch("/api/authenticate", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(this.handleErrors)
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.isAuthenticated = true;
        cb();
      })
      .catch(error => console.log(error));
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
};
