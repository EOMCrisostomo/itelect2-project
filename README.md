# itelect2-project
My IT Elective 2 backend web development project.

# API Testing Results

This area contains the results of API Testing. 

---

## GET Request

### Retrieve All Records
The API successfully retrieves all available records.

![](Images/GET.png)

### Retrieve a Record by ID
The API successfully retrieves the specified record using its ID.

![](<Images/GET w id.png>)

---

## POST Request

### Create a New Record
The API successfully creates a new record and stores it in the database.

![](Images/POST.png)

### Verify Created Record
The newly created record is successfully retrieved using a GET request.

![](<Images/POST GET.png>)

### Error Handling
The API correctly returns an error response when invalid or incomplete data is submitted.

![](<Images/POST Error.png>)

---

## PUT Request

### Update an Existing Record
The API successfully updates the specified record.

![](Images/PUT.png)

### Verify Updated Record
The updated information is successfully retrieved using a GET request.

![](<Images/PUT GET.png>)

### Error Handling
The API correctly returns an error response when attempting to update a record with invalid data or a non-existent ID.

![](<Images/PUT Error.png>)

---

## DELETE Request

### Delete an Existing Record
The API successfully deletes the specified record.

![](Images/DELETE.png)

### Verify Deletion
A subsequent GET request confirms that the record has been removed.

![](<Images/DELETE GET.png>)

### Error Handling
The API correctly returns an error response when attempting to delete a record that does not exist or when an invalid request is made.

![](<Images/DELETE Error.png>)