let contDiv = document.querySelector(".container")


fetch("https://random-data-api.com/api/v2/users?size=1&is_xml=true")
    .then((res) => res.json())
    .then((data) => {
        const firstName = document.createElement("h1")                //displaying first name
        firstName.innerText = "First Name: " + data.first_name
        firstName.style.color = "red"
        contDiv.appendChild(firstName)

        const lastName = document.createElement("h1")                 //displaying last name
        lastName.innerText = "Last Name: " + data.last_name
        lastName.style.color = "blue"
        contDiv.appendChild(lastName)

        const dob = document.createElement("h1")                        // displaying dob
        dob.innerText = "Date of Birth: " + data.date_of_birth
        dob.style.color = "red"
        contDiv.appendChild(dob)

        const email = document.createElement("h1")                      //displaying email
        lastName.innerText = "Email ID: " + data.email
        email.style.color = "blue"
        contDiv.appendChild(email)

        const phone = document.createElement("h1")
        phone.innerText = "Phone Number: " + data.phone_number          //displaying phone number
        phone.style.color = "red"
        contDiv.appendChild(phone)

        const username = document.createElement("h1")
        username.innerText = "Username: " + data.username               //displaying Username
        username.style.color = "blue"
        contDiv.appendChild(username)

        const password = document.createElement("h1")               //displaying password
        password.innerText = "Password: " + data.password
        password.style.color = "red"
        contDiv.appendChild(password)

        const address = document.createElement("h1")
        address.innerText = "Address: " + data.address.street_address + "," + data.address.street_name
        address.style.color = "blue"
        contDiv.appendChild(address)

        const state = document.createElement("h1")
        state.innerText = "State: " + data.address.state         //displaying state
        state.style.color = "red"
        contDiv.appendChild(state)


        const country = document.createElement("h1")
        country.innerText = "Country: " + data.address.country
        country.style.color = "blue"                                    //displaying country
        contDiv.appendChild(country)


        const cardnum = document.createElement("h1")
        cardnum.innerText = "Credit Card Number: " + data.credit_card.cc_number //displaying credit card number
        cardnum.style.color = "red"
        contDiv.appendChild(cardnum)
    }
)


    

