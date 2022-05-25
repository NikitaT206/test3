let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

const filtredCourses = (courses, prices) => {
  
  return courses.filter(course => {
    const min = course.prices[0] === null ? 0 : course.prices[0]
    const max = course.prices[1] === null ? course.prices[0] : course.prices[1]
    return max >= Math.min(...prices) && min <= Math.max(...prices)
  }) 
}

const sortedCourses = (courses, maxPrice = false) => {
  return courses.sort((a, b) => maxPrice ? b.prices[0] - a.prices[0] : a.prices[0] - b.prices[0])
}

console.log(filtredCourses(courses, [null, 100]))
console.log(sortedCourses(courses))

