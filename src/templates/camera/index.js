import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import QRCode from "qrcode";
import QrReader from "react-qr-reader";

import { Navigation } from "../../components";

const Camera = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const classes = useStyles();

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleErrorWebCam = (error) => {
    console.log(error);
  };

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };

  return (
    <div style={wrapperStyle}>
      <Navigation />
      <Container className={classes.conatiner}>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <TextField
                  label="Enter Text Here"
                  onChange={(e) => setText(e.target.value)}
                  className={classes.textField}
                />
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="secondary"
                  onClick={() => generateQrCode()}
                >
                  Generate
                </Button>
                <br />
                <br />
                <br />
                {imageUrl ? (
                  <a href={imageUrl} download>
                    <img src={imageUrl} className={classes.img} alt="img" />
                  </a>
                ) : null}
              </Grid>
              <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                <h3>Scanned: {scanResultWebCam}</h3>
                <QrReader
                  delay={300}
                  style={{ width: "100%" }}
                  onError={handleErrorWebCam}
                  onScan={handleScanWebCam}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#3f51b5",
    color: "#fff",
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
  img: {
    width: "90%",
  },
  textField: {
    margin: "0 10%",
  },
}));

const wrapperStyle = {
  backgroundColor: "#fae9d4",
  height: "100vh",
};

export default Camera;
