class FetchDataController {
  constructor() {
    this.data = [
      {
        Name: "Ajinkya",
        Age: "25",
        Marks: "80",
      },
      {
        Name: "Krishna",
        Age: "23",
        Marks: "90",
      },
      {
        Name: "Ananta",
        Age: "28",
        Marks: "100",
      },
      {
        Name: "Pruthvi",
        Age: "24",
        Marks: "120",
      },
    ];
  }
  //function for sorting the data by age
  /**
   *
   * @param {express.Request} req : Request Object
   * @param {express.Response} res : Response Object
   * @returns:void
   */
  sortByAge = (req, res) => {
    const newData = [...this.data];
    newData.sort((a, b) => a.Age - b.Age);

    res.status(200).json(newData);
  };
  //function for finding the sum of marks
  /**
   *
   * @param {express.Request} req : Request Object
   * @param {express.Response} res : Response Object
   */
  getSum = (req, res) => {
    let sum = 0;
    for (const item of this.data) {
      sum += parseInt(item.Marks);
    }
    res.status(200).json({ sum });
  };
}
module.exports = FetchDataController;
