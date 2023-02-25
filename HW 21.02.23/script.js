// Задача: максимальная выгода, второстепенно заполняемость
// зал для конференций работает с 9:00 до 17:00
// заявки с 9:00 до 13:00 стоят 1 единицу
// заявки с 13:00 до 17:00 стоят 2 единицы
// заявки на пересечении в большую сторону 9:00 стоят 1 ед (заявки, которые занимают больше времени с 9 до 13)
// например с 11 до 14 стоит 1 ед
// заявки на пересечении в большую сторону 17:00 стоят 2 ед (заявки, которые занимают больше времени с 13 до 17)
// например с 12 до 16 стоит 2 ед
// заявки на середине стоят 2 ед (заявки, которые занимают одинаковое количество  времени в обоих интервалах)
// например с 12 до 14 стоит 2 ед


// class  Activity {
//     name
//     startTime
//     endTime

//     constructor(name, startTime, endTime) {
//         this.name = name
//         this.startTime = startTime;
//         this.endTime = endTime;
//     }
// }

// function maximizeNumberOfActivities(activities) {
//     function maximizeNumberOfActivities(activities) {
//         // сортируем мероприятия по времени окончания
//         activities.sort((activity1, activity2) => activity1.endTime - activity2.endTime)
//         // создаем контейнер, где будем хранить результат
//         const selectedActivities = []
//         // мероприятие, которое заканчивается раньше всех a priori попадет в контейнер
//         const firstActivity = activities[0]
//         selectedActivities.push(firstActivity)
//         let lastChosenActivity = firstActivity;
//         // по порядку проходим по всем мероприятиям
//         for (let i = 0; i < activities.length; i++) {
//             let currentActivity = activities[i]
//             // условие непересечения
//             if (currentActivity.startTime >= lastChosenActivity.endTime) {
//                 selectedActivities.push(currentActivity)
//                 lastChosenActivity = currentActivity
//             }
//         }
//         // returns list of selected activities
//         return selectedActivities
//     }


// }

// /// Check
// const activitiesToSchedule = [];
// activitiesToSchedule.push(new Activity("A", 900,1300))
// activitiesToSchedule.push(new Activity("B", 1300,1700))
// activitiesToSchedule.push(new Activity("C", 1100,1400))
// activitiesToSchedule.push(new Activity("D", 1200,1600))


// const selectedActivities = maximizeNumberOfActivities(activitiesToSchedule)

// console.log(selectedActivities)

