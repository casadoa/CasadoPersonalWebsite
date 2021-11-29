

$(document).ready(function(){
    const quoteArr = ['The purpose of our lives is to be happy.', 'You only live once, but if you do it right, once is enough', 'Not how long, but how well you have lived is the main thing.', 'In order to write about life first you must live it.', 'The big lesson in life, baby, is never be scared of anyone or anything.', 'Life is not a problem to be solved, but a reality to be experienced.', 'Live for each second without hesitation.', 'Life is like riding a bicycle. To keep your balance, you must keep moving.', 'The healthiest response to life is joy.', 'Life would be tragic if it weren\'t funny', 'Life is short, and it is here to be lived.', 'The longer I live, the more beautiful life becomes.', 'Every moment is a fresh beginning.', 'Don\'t cry because it\'s over, smile because it happened.', 'If you can do  what you do best and be happy, you\'re further along in life than most people.', 'The best way to predict your future is to create it.', 'You must expect great things of yourself before you can do them.', 'There are no mistakes, only opportunities.', 'Be happy for this moment. This moment is your life.'];
    const quoteAuth = ['Dalai Lama', 'Mae West', 'Seneca', 'Ernest Hemingway', 'Frank Sinatra', 'Soren Kierkegaard', 'Elton John', 'Albert Einstein', 'Deepak Chopra', 'Stephen Hawking', 'Kate Winslet', 'Frank Lloyd', 'T.S. Eliot', 'Dr. Seuss', 'Leonardo DiCaprio', 'Abraham Lincoln', 'Michael Jordan', 'Tina Fey', 'Omar Khayyam'];

    let randomIndex = Math.floor(Math.random() * 19);
    
    let quote = quoteArr[randomIndex];
    let author = quoteAuth[randomIndex];
    console.log(randomIndex);
    console.log(quoteAuth[randomIndex]);
    if(randomIndex === 14){
        $('p.quote').html(function() {
            return '"' + quote + '"' + ' ,' + '<br>' +  '- ' + author;
        })
    } else {
        $('p.quote').append('"' + quote + '"' + ' , - ' + author);
    }
});