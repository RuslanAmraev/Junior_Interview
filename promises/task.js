const result = promiseFunction().then(()=>console.log('Промис работает верно!'))
console.log(`Промис ${typeof result === 'string' ? '' : 'НЕ'} работает ${typeof result === 'string' ? result : ''}`)
