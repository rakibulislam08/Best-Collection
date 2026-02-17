1) What is the difference between `null` and `undefined`?
=> null হচ্ছে ভ্যারিয়েবলে ইচ্ছা করে কোনো মান না দিয়ে খালি রাখা .
ex: let x = ;
আর  undefined হচ্ছে ভ্যারিয়েবলে ডিকলেয়ার করা আছে কিন্তু ভ্যালু দেওয়া হইনি, ফাংশন কিছু রির্টান না করলে ।
ex : let x 

2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
=> map() হলো একটী array থেকে নতুন array বানানো হয়।
forEach() হলো লুপের মতো কাজ করে কিন্তু কিছু returen করে না।

 3) What is the difference between `==` and `===`?
 => `==` হলো শুদু value চেক করে আর `===` value and type ও চেক করে ।

 4) What is the significance of `async`/`await` in fetching API data?
=> `async`/`await` হলো API থেকে Data আনার ক্ষেত্রে কাজ করে ,কোড করে সহজ এবং error handle করতে সুবিধা হয় ।

5) Explain the concept of Scope in JavaScript (Global, Function, Block).
=> Scope  হলো variable গুলা কোথায় কোথায় থেকে কল করা হয়
 
Global হলো variable যেকোন জায়গা থেকে কল করা যায়।
Function হলো Function ভিতরে declear করা variable শুদু অই ফাংশনে কল করা যায়।
Block হলো {} এই সেকেন্ড ব্র্যাকের ভিতরে থাকা variable গুলা অই { এই ব্যাকের জন্য কল করা যায় ,ব্র‍্যাকের বাহিরে কল হয় না । }