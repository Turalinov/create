
import IMask from 'imask';


export default function form() {

  const forms = document.querySelectorAll('.js-form');
  let phoneMask;

  const errorsStatus = {
    nameNotDigit: 'Имя не должно содержать цифры',
    nameEmpty: 'Имя не должно быть пустым',
    phoneNotCorrect: 'Проверьте правильность номера',
    emailNotCorrect: 'Проверьте правильность почты',
  }

  const message = {
    loading: 'Загрузка данных',
    success: 'Спасибо, ваша заявка принята! Наш менеджер свяжется с вами в ближайшее время',
    failure: "Что-то пошло не так, обратитесь к администратору сайта",
  }


  if (forms.length > 0) {
    forms.forEach(form => {

      const btn = form.querySelector('button.btn');
      btn.disabled = true;

      addValidate(form);
      bindPostData(form);
    })

      function bindPostData(form) {


      form.addEventListener('submit', function(e) {

        e.preventDefault();

        const btn = form.querySelector('button.btn');

        const statusMessage = document.createElement('div');
        statusMessage.classList.add('form__message');
        statusMessage.innerText = message.loading;

        form.insertAdjacentElement("afterend", statusMessage );

        btn.disabled = true;


        const formData = new FormData(form);



        postData("vendor/mail.php", formData)
          .then((data) => {
            console.log(data)
            statusMessage.innerText = message.success;
          })
          .catch((err) => {
            console.log(err)
            statusMessage.innerText = message.failure;
          })
          .finally(() => {
            phoneMask.masked.reset();
            form.reset();
            setTimeout(() => {
              statusMessage.remove()
            }, 4000);
          })
      })
    }

    const postData = async (url, data) => {
      const res = await fetch(url, {
        method: "POST",
        body: data,
      });

      return await res.json();
    };

     function addValidate(form) {

      const phoneInput = form.querySelector('.js-phone-input');
      const nameInput = form.querySelector('.js-name-input');
      const emailInput = form.querySelector('.js-email-input');
      const errorContainer = form.querySelector('.js-error-container');


      const btn = form.querySelector('button.btn');

      phoneMask = IMask(phoneInput, {
        mask: '8 (000) – 000 – 00 – 00',
        placeholderChar: '_',
        lazy: true,
      });

      phoneInput.addEventListener("input", inputHandler);
      nameInput.addEventListener("input", inputHandler);
      emailInput.addEventListener("input", inputHandler);


      function inputHandler() {

        let errors = [];

        if (nameInput.value == '') {
          errors.push(errorsStatus.nameEmpty);
        } else {


          if (/\d/.test(nameInput.value) && nameInput.value !== '') {
          errors.push(errorsStatus.nameNotDigit);
          }
        }



        if(!(phoneMask.masked.isComplete)) {
          errors.push(errorsStatus.phoneNotCorrect);


        }

        if (!(isValidEmail(emailInput.value))) {
          errors.push(errorsStatus.emailNotCorrect)

        }



        if (errors.length > 0 ) {
          errorContainer.innerText = errors[0];
          btn.disabled = true
        } else {
          errorContainer.innerText = '';
          btn.disabled = false
        }

        console.log(errors)
        console.log(errors[0]);

        //здесь как-то подумать чтобы при проверке если все ок, только тогда разблокировать кнопку и потом снова блокировать с текстом загрузка и в финале сброс
        //и продумать чтобы при успешной и не успещной отправки формы возвращался json mail.php
        //также попросить отрисовать модалку чтобы при ошибке или успехе оно открывалось

      }

      function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

    }
  }



  // phones.forEach((item) => {
  //   =

  //   item.addEventListener("click", function() {
  //     phoneMask.updateOptions({
  //       lazy: false
  //     });
  //   });
  // });

}
