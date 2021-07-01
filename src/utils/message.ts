const getMessage = (calories: number): string => {
  if (calories > 300) return "Eat them wisely.";

  if (calories > 200) return "Don't eat more than 1 ;)";

  if (calories > 100) return "Do not overeat. xd";

  if (calories > 50) return "Have a healthy snack!";

  return "Have fun!";
};

export default getMessage;
