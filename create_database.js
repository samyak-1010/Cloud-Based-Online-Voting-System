const createUsersTable = `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL, 
    role ENUM('voter', 'admin') DEFAULT 'voter',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const createCandidatesTable = `CREATE TABLE IF NOT EXISTS candidates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    party VARCHAR(100),
    manifesto TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const createElectionsTable = `CREATE TABLE IF NOT EXISTS elections (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    status ENUM('upcoming', 'ongoing', 'completed') DEFAULT 'upcoming'
)`;

const createVotesTable = `CREATE TABLE IF NOT EXISTS votes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    candidate_id INT NOT NULL,
    election_id INT NOT NULL,
    voted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE,
    FOREIGN KEY (election_id) REFERENCES elections(id) ON DELETE CASCADE
)`;

// Execute the table creation queries
db.query(createUsersTable, (err, results) => {
    if (err) throw err;
    console.log("Users table created!");
});

db.query(createCandidatesTable, (err, results) => {
    if (err) throw err;
    console.log("Candidates table created!");
});

db.query(createElectionsTable, (err, results) => {
    if (err) throw err;
    console.log("Elections table created!");
});

db.query(createVotesTable, (err, results) => {
    if (err) throw err;
    console.log("Votes table created!");
});
