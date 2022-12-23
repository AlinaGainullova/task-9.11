const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Наталья",
            "id_2": "Жанна",
            "id_3": "Татьяна",
            "id_4": "Марина",
            "id_5": "Ольга",
            "id_6": "Людмила",
            "id_7": "Тамара",
            "id_8": "Евангелина",
            "id_9": "Кристина",
            "id_10": "Елизавета"
        }
    }`,
    
    professionsFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "учительница",
            "id_2": "продавщица",
            "id_3": "балерина",
            "id_4": "танцовщица",
            "id_5": "доярка",
            "id_6": "актриса",
            "id_7": "акушерка",
            "id_8": "домработница",
            "id_9": "бортпроводница",
            "id_10": "певица"
        }
}`,
    professionsMaleJson: `{
    "count": 10,
    "list": {     
        "id_1": "слесарь",
        "id_2": "кладовщик",
        "id_3": "кинолог",
        "id_4": "шахтер",
        "id_5": "водитель",
        "id_6": "пекарь",
        "id_7": "фермер",
        "id_8": "солдат",
        "id_9": "поэт",
        "id_10": "юрист"
    }
}`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        return this.person.gender = this.randomIntNumber() == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


     randomSurname: function() {
        if (this.person.gender == this.GENDER_MALE){
            return this.randomValue(this.surnameJson);
        }else { 
            return this.randomValue(this.surnameJson) + 'а';
        }

    },

     randomProfessions: function() {
        if (this.person.gender == this.GENDER_FEMALE){
           return this.randomValue(this.professionsFemaleJson);
        } else {
           return this.randomValue(this.professionsMaleJson); 
        } 
    },

    randomBirthYear: function() {
            let randomDays = this.randomIntNumber(1, 31);
            let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
            let randomMonths = Math.floor(Math.random() * months.length);
            let randomYear = this.randomIntNumber(1958, 2005);
            if(months == 'февраля'){
                randomDays = this.randomIntNumber(1, 28);
            }
            if(months == 'апреля' || months =='июня' || months == 'сентября' || months == 'ноября'){
                randomDays = this.randomIntNumber(1, 30);
            }
            return 'дата рождения: ' + Math.round(randomDays) + ' ' + months[randomMonths] + ' ' + Math.round(randomYear) + 'г.';       
    },

    randomPatronymic: function(){
       let randomFather = this.randomValue(this.firstNameMaleJson);
       let fatherRoot = randomFather.slice(0, -1);  
       let fatherEnd = randomFather.slice(randomFather.length-2, randomFather.length);  
            if(this.person.gender == this.GENDER_MALE){
                    switch (fatherEnd){
                    		case "ий": 
                            randomFather = fatherRoot + "евич"; 
                            break;
                    		case "та": 
                            randomFather = fatherRoot + "ич"; 
                            break;
                    		case "ей": 
                            randomFather = fatherRoot + "евич";
                            break;
                    		default: 
                            randomFather +="ович"; 
                            break;
                    	}
            return randomFather;
            } else {
                switch (fatherEnd){
                    case "ий": 
                    randomFather = fatherRoot + "евна"; 
                    break;
                    case "та": 
                    randomFather = fatherRoot + "ична"; 
                    break;
                    case "ей": 
                    randomFather = fatherRoot + "евна";
                    break;
                    default: 
                    randomFather +="овна"; 
                    break;
                }
            return randomFather;
           }  
    },

      
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        this.person.professions = this.randomProfessions();
        this.person.patronymic = this.randomPatronymic();
        return this.person;
    }
};



