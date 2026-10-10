//2.1
function kebabToCamel(str) {
    const parts = str.split('-');
    let result = parts[0];    
    for (let i = 1; i < parts.length; i++) {
        const word = parts[i];
        result += word.at(0).toUpperCase() + word.slice(1);
    }   
    return result;
}
console.log(kebabToCamel('background-color'));




//2.2
const original = [9, 8, 7, 6, 5, 4, 3, 2, 1];
//1 способ
const copy1 = [...original];
copy1.reverse();
//2 способ
const copy2 = Array.from(original);
for (let i = 0; i < copy2.length / 2; i++) {
    const temp = copy2[i];
    copy2[i] = copy2[copy2.length - 1 - i];
    copy2[copy2.length - 1 - i] = temp;
}




//2.3
const dictionary = {
    'привет': 'hello',
    'мир': 'world',
    'кошка': 'cat',
    'собака': 'dog',
    'и':'and'
};

function translate(text, dict) {
    const words = text.split(' ');
    const translated = words.map(word => {
        const lowerWord = word.toLowerCase();
        return dict[lowerWord] !== undefined ? dict[lowerWord] : word;
    });   
    return translated.join(' ');
}
console.log(translate('привет мир', dictionary));
console.log(translate('кошка и собака', dictionary));




//2.4
const daysOfWeek = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',
    getCurrentDay: function() {
        const date = new Date();
        let dayNumber = date.getDay();
        if (dayNumber === 0) dayNumber = 7;      
        return this[dayNumber];
    }
};
console.log('Сегодня:', daysOfWeek.getCurrentDay());




//2.5
const staff = {
    'директор': 'Иванов И.И.',
    'бухгалтер': 'Петрова А.С.',
    'менеджер': 'Сидоров П.В.'
};
const staff2 = { ...staff };
staff2['директор'] = 'Смирнов А.А.';
staff2['бухгалтер'] = 'Кузнецова М.И.';
staff2['менеджер'] = 'Попов Д.К.';
function objectToString(obj) {
    let result = '';
    for (const key in obj) {
        result += `${key}: ${obj[key]}\n`;
    }
    return result;
}
console.log('=== Персонал ===\n' + objectToString(staff));
console.log('=== Персонал 2 ===\n' + objectToString(staff2));




//2.6
const subjects = {
    list: 'Математика, Физика, Информатика, История',
    add: function(subject) {
        const arr = this.list.split(', ');
        if (arr.includes(subject)) {
            console.log(`Предмет "${subject}" уже есть в списке`);
        } else {
            arr.push(subject);
            this.list = arr.join(', ');
            console.log(`Предмет "${subject}" добавлен`);
        }
    },
    remove: function(subject) {
        const arr = this.list.split(', ');
        const index = arr.indexOf(subject);
        if (index !== -1) {
            arr.splice(index, 1);
            this.list = arr.join(', ');
            console.log(`Предмет "${subject}" удалён`);
        } else {
            console.log(`Предмет "${subject}" не найден`);
        }
    },
    show: function() {
        console.log('Предметы:', this.list);
    }
};
subjects.show();              // Математика, Физика, Информатика, История
subjects.add('Химия');        // добавится
subjects.show();
subjects.add('Физика');       // уже есть, не добавится
subjects.remove('История');   // удалится
subjects.show();
subjects.remove('Биология');  // не найдена