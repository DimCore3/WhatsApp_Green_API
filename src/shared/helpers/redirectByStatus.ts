type StatusType = 'processing' | 'notAuthorized' | 'authorized' | 'blocked' | 'sleepMode' | 'starting';

function redirectByStatus(navigate: Function, status: StatusType) {
    if (status === 'authorized') {
        navigate('./messenger');

    } else if (status === 'notAuthorized') {
        navigate('./authentication');

    } else if (status === 'blocked') {
        alert('Аккаунт забанен');
        navigate('./authentication');
    }
    
    else if (status === 'sleepMode') {
        alert(' Аккаунт ушел в спящий режим. Состояние возможно, когда выключен телефон. После включения телефона может потребоваться до 5 минут для перевода состояния аккаунта в значение authorized.');
        navigate('./authentication');
    }
    
    else if (status === 'starting') {
        alert('Аккаунт в процессе запуска (сервисный режим). Происходит перезагрузка инстанса, сервера или инстанс в режиме обслуживания. Может потребоваться до 5 минут для перевода состояния аккаунта в значение authorized.');
        navigate('./authentication');
    }
}

export default redirectByStatus;