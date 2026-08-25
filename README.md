# itelect2-project
My IT Elective 2 backend web development project.

# API Testing Results

This area contains the results of API Testing. 

---
### OLD API TESTING RESULTS
## GET Request

### Retrieve All Records
The API successfully retrieves all available records.

![](Images/GT6/GET.png)

### Retrieve a Record by ID
The API successfully retrieves the specified record using its ID.

![](<Images/GT6/GET w id.png>)

---

## POST Request

### Create a New Record
The API successfully creates a new record and stores it in the database.

![](Images/GT6/POST.png)

### Verify Created Record
The newly created record is successfully retrieved using a GET request.

![](<Images/GT6/POST GET.png>)

### Error Handling
The API correctly returns an error response when invalid or incomplete data is submitted.

![](<Images/GT6/POST Error.png>)

---

## PUT Request

### Update an Existing Record
The API successfully updates the specified record.

![](Images/GT6/PUT.png)

### Verify Updated Record
The updated information is successfully retrieved using a GET request.

![](<Images/GT6/PUT GET.png>)

### Error Handling
The API correctly returns an error response when attempting to update a record with invalid data or a non-existent ID.

![](<Images/GT6/PUT Error.png>)

---

## DELETE Request

### Delete an Existing Record
The API successfully deletes the specified record.

![](Images/GT6/DELETE.png)

### Verify Deletion
A subsequent GET request confirms that the record has been removed.

![](<Images/GT6/DELETE GET.png>)

### Error Handling
The API correctly returns an error response when attempting to delete a record that does not exist or when an invalid request is made.

![](<Images/GT6/DELETE Error.png>)

---



### NEW API TESTING RESULTS
## GET Request

### Retrieve All Records
The API successfully retrieves all available records.

![](<Images/GT 8/GET.png>)

### Retrieve a Record by ID
The API successfully retrieves the specified record using its ID.

![](<Images/GT 8/GET w id.png>)

### ID not found error
The API fails in retrieving the specified record using its ID.

![](<Images/GT 8/GET Error.png>)

---

## POST Request

### Create a New Record
The API successfully creates a new record and stores it in the database.

![](Images/GT 8/POST.png)

### Verify Created Record
The newly created record is successfully retrieved using a GET request.

![](<Images/GT 8/POST success.png>)

### Error Handling
The API correctly returns an error response when invalid or incomplete data is submitted.

![](<Images/GT 8/POST ERROR.png>)

---

## PUT Request

### Update an Existing Record
The API successfully updates the specified record.

![](<Images/GT 8/PUT.png>)

### Verify Updated Record
The updated information is successfully retrieved using a GET request.

![](<Images/GT 8/PUT success.png>)

### Error Handling
The API correctly returns an error response when attempting to update a record with invalid data or a non-existent ID.

![](<Images/GT 8/PUT ERROR.png>)

---

## DELETE Request

### Delete an Existing Record
The API successfully deletes the specified record.

![](<Images/GT 8/DELETE.png>)

### Verify Deletion
A subsequent GET request confirms that the record has been removed.

![](<Images/GT 8/DELETE success.png>)

### Error Handling
The API correctly returns an error response when attempting to delete a record that does not exist or when an invalid request is made.

![](<Images/GT 8/DELETE ERROR.png>)