#!/usr/bin/python3
import sys
import MySQLdb

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: {} username password database state_name".format(sys.argv[0]))
        sys.exit(1)

    username = sys.argv[1]
    password = sys.argv[2]
    database = sys.argv[3]
    state_name = sys.argv[4]

    try:
        conn = MySQLdb.connect(host="localhost", port=3306, user=username,
                               passwd=password, db=database, charset="utf8")
        cursor = conn.cursor()
        query = "SELECT * FROM states WHERE name='{}' ORDER BY id".format(state_name)
        cursor.execute(query)
        rows = cursor.fetchall()

        for row in rows:
            print(row)

        cursor.close()
        conn.close()

    except MySQLdb.Error as e:
        print("MySQL Error:", e)
        sys.exit(1)

