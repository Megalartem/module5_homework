let my_resume = new Map([

  ["name","Artem"],
  ["age","23"],
  ["work","sysadmin"],
  ["hobby", "take a walk"]
]);


for (let key of my_resume.keys()) {
   console.log(`Ключ — ${key}, значение — ${my_resume.get(key)}`);
}
