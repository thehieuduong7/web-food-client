import * as React from "react";
import {
    Box,
    Grid,
    Typography,
    Button,
    TextField
} from "@mui/material";
import Card from "@mui/material/Card";
import { useContext } from "react";
import { AuthContext } from "../../helpers/context/authContext";
import { CustomersService } from "../../helpers/service/customerService";

const initCustomer = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "abc123",
    address: "00000000",
    gender: "MALE",
    dayOfBirth: Date.now()
};

export default function CustomerInfo() {
    const {customerId} = useContext(AuthContext)
    const [stateForm, setStateForm] =React.useState(initCustomer);
    const [fullName,setFullname] = React.useState(stateForm.firstName+" "+stateForm.lastName);
    const {authState: { user },
    } = useContext(AuthContext);
    React.useEffect(() => {
        console.log(user)
        CustomersService.getCustomerById(user.customerId).then(res => {
            setStateForm(res)
            console.log(res)
            setFullname(res.firstName+" "+res.lastName)
        })
    },[useContext.customerId])
    
    const updateClick =(e) =>{
        console.log(stateForm)
        stateForm.password ="abc123"
        stateForm.gender ="MALE"
        stateForm.dayOfBirth ="2022-12-04T16:36:14.157Z"
        CustomersService.updateCustomerById(stateForm).then(res =>{
            console.log(res)
        })
    }
    const handleChangeText = (e) => {
        setStateForm((pre) => {
            return {
                ...pre,
                [e.target.name]: e.target.value,
            };
        });
    };
    return (
        <Card className="OrderItem" sx={{ border: 0.5, flexDirection: "column", borderColor: "#EBE7F3", display: "flex", marginTop: 0.5, justifyContent: 'flex-start' }}>
            
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginLeft:3,
                        marginTop:2,
                        marginBottom:2
                    }}
                >
                    <Box  sx={{width:150}}>
                        <strong >Customer Name  </strong>
                    </Box>
                    <TextField
                        required
                        name="address"
                        size="small"
                        multiline ={true}
                        maxRows={5}
                        fullWidth
                        onChange={handleChangeText}
                        value={fullName}
                        sx={{
                            flexDirection: "row",
                        }}
                    >
                        <strong >{} {}  </strong>
                    </TextField>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginLeft:3,
                        marginBottom:2
                    }}
                >
                    <Box  sx={{width:150}}>
                        <strong >Address  </strong>
                    </Box>
                    <TextField
                        required
                        name="address"
                        size="small"
                        multiline ={true}
                        maxRows={5}
                        fullWidth
                        onChange={handleChangeText}
                        value={stateForm?stateForm.address:"no"}
                        sx={{
                            flexDirection: "row",
                        }}
                    >
                    </TextField>
                    
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginLeft:3,
                        marginBottom:2
                    }}
                >
                    <Box  sx={{width:150}}>
                        <strong >Phone  </strong>
                    </Box>
                    <TextField
                        required
                        name="phone"
                        size="small"
                        multiline ={true}
                        maxRows={5}
                        fullWidth
                        onChange={handleChangeText}
                        value={stateForm?stateForm.phone:"00000000"}
                        sx={{
                            flexDirection: "row",
                        }}
                    >
                    </TextField>
                    
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        marginLeft:3,
                        marginBottom:2
                    }}
                >
                    <Box  sx={{width:150}}>
                        <strong >Gmail  </strong>
                    </Box>

                    <TextField
                        required
                        name="description"
                        size="small"
                        multiline ={true}
                        maxRows={5}
                        fullWidth
                        // onChange={handleChangeText}
                        value={stateForm?stateForm.email:"email"}
                        sx={{
                            flexDirection: "row",
                        }}
                    >
                    </TextField>
                    
                </Box>

                <Box
                    sx={{
                        width: 300,
                        display: "flex",
                        flexDirection: "column",
                        marginLeft:3,
                        marginBottom:1.5
                    }}
                >
                    <Button onClick={updateClick} variant="outlined" sx={{
                    maxWidth: "400px",
                    width: 150,
                    height: 40,
                    color: "#16802C",
                    alignItems: "center",
                    borderColor: "#16802C",
                }}
                >
                    <strong>UPDATE</strong>
                    </Button>
                </Box>
           
        </Card>
    )
}