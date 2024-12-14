function main(num1, num2) {
  cur = num1;
  function ctx() {
    if (cur > num2) return;

    console.log(cur);
    cur++;
    ctx();
  }
  ctx();
}

main(1, 10);
