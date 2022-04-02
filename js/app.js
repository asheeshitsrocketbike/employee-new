const employeeInfo = [
	{
      Name: 'David', 
      DOB: '04-10-1978',
	  Address: 'Chandigarh',
      Company: 'Infosis',
      Email: 'abc@gmail.com',
	  Phone: 19123456
    },
	{
      Name: 'Kumar', 
      DOB: '10-03-1988',
	  Address: 'Delhi',
      Company: 'HCL',
      Email: 'xyz@gmail.com',
	  Phone: 191236
    },
	{
      Name: 'Roof', 
      DOB: '23-10-1998',
	  Address: 'Paryagraj',
      Company: 'Bebo Technology',
      Email: 'roof@gmail.com',
	  Phone: 19983456
    }
	
]

const employee = new Vue({
	el: "#employee",
	data: {
		title: 'Add/Delete Employee',
		employeeList: employeeInfo,
		e_Name: '',
		e_DOB: '', 
		e_Address: '', 
		e_Company: '', 
		e_Email: '', 
		e_Phone: '',
		errors: []
	},
	methods: {
		addEmployee: function(){
			if(!this.e_Name || !this.e_DOB || !this.e_Address || !this.e_Email || !this.e_Phone){
				//this.errors = [];
				checkForm();
			}else{
				this.employeeList.push({
				  Name: this.e_Name,
				  DOB: this.e_DOB,
				  Address: this.e_Address,
				  Company: this.e_Company,
				  Email: this.e_Email,
				  Phone: this.e_Phone
				});
				this.e_Name = '';
				this.e_DOB = '';
				this.e_Address = '';
				this.e_Company = '';
				this.e_Email = '';
				this.e_Phone = '';
				this.errors = [];
			}
		},
		checkForm: function (e) {
			this.errors = [];
			
			if (!this.e_Name) {
				this.errors.push('Name required.');
			}
			if (!this.e_DOB) {
				this.errors.push('DOB required.');
			}
			if (!this.e_Address) {
				this.errors.push('Address required.');
			}
			if (!this.e_Email) {
				this.errors.push('Email required.');
			}
			if (!this.e_Phone) {
				this.errors.push('Phone Number required.');
			}

			e.preventDefault();
		}
	}
});











