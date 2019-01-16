const router = require("express").Router();
const client = require("./client");

module.exports = router;


router.get("/input", (req,res) => {
	client.query("select * from input", (err, data) => {
		if(err) return console.error(err);

		data.rows.forEach(rowObject => {
			console.log(rowObject);
		})
		res.send(data.rows);
	})
	return;
})

router.post("/input", (req,res) => {
	const {input, length } = req.body;

  client.query(
      // use string interpolation to create sql query to insert values into db
    `insert into input (input,length) values ( 
    '${input}', ${length});`,
    (err, data) => {
      if (err) return console.error(err);
      console.log(data);
      // once successful, use query to get all hats from hats table again
      client.query("select * from input", (err, data) => {
        data.rows.forEach(rowObject => {
          console.log(rowObject);
        });
        // send all hats back. 201 is http response code for creation successful
        res.status(201).send(data.rows);
      });
    }
  );
  return;
})

router.delete("/input", (req,res) => {
  const {id, input, length } = req.body;

  client.query(
      // use string interpolation to create sql query to insert values into db
    `delete from input where id = '${id}';`,
    (err, data) => {
      if (err) return console.error(err);
      console.log(data);
      // once successful, use query to get all hats from hats table again
      client.query("select * from input", (err, data) => {
        data.rows.forEach(rowObject => {
          console.log(rowObject);
        });
        // send all hats back. 201 is http response code for creation successful
        res.status(201).send(data.rows);
      });
    }
  );
  return;
})