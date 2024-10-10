export function less52() {
    let promocode = prompt('Введите промкод');
    let code = promocode.toLowerCase();
    
    if (code === 'скидка') {
      alert('промокод применён');
    } else {
      alert('промокод не работает');
    }
  }