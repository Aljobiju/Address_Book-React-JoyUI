import React from "react";
import {
  Button,
  Divider,
  Modal,
  ModalClose,
  ModalDialog,
  useTheme,
  Box,
  Grid,
  Card,
  Typography,
} from "@mui/joy/";
import { Clear } from "@mui/icons-material";
const AddContact = () => {
  return (
    <Box>
      <form onSubmit={""}>
        <Grid container spacing={2} columns={16} sx={{ flexGrow: 1 }}>
          {/* <Grid md={"auto"}>
            {isSmallScreen ? (
              <Drawer variant="temporary"></Drawer>
            ) : (
              <Box></Box>
            )}
          </Grid> */}
          <Grid xs={16} md={12} px={3} pb={2} sx={{ flexGrow: 1 }} mx="auto">
            <Grid container alignItems="center" justifyContent="center">
              <Grid container mx="auto">
                <Card>
                  <Typography level="h2">Create Room</Typography>
                  <Grid container xs={11} mx="auto" spacing={3}>
                    <Grid
                      container
                      xs={12}
                      spacing={1}
                      direction="column"
                      alignItems="flex-start"
                    >
                      <Grid>
                        <Typography level="title-lg">Room Name</Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography color="danger">hi</Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      xs={12}
                      spacing={1}
                      direction="column"
                      alignItems="flex-start"
                    >
                      <Grid>
                        <Typography level="title-lg">
                          Estimation Value
                        </Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Box width={"100%"}>
                          <Typography>hi</Typography>
                        </Box>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      xs={12}
                      spacing={1}
                      direction="column"
                      alignItems="flex-start"
                    >
                      <Grid>
                        <Typography level="title-lg">Add Guest</Typography>
                      </Grid>
                      <Grid xs={12}>
                        <Typography>hello</Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={1}
                      direction="column"
                      alignItems="flex-start"
                    >
                      <Grid>
                        <Typography level="title-lg">Set Timer</Typography>
                      </Grid>
                      <Grid>
                        <Typography color="danger">Timer</Typography>
                      </Grid>
                    </Grid>

                    <Grid container xs={12} spacing={1} justifyContent="start">
                      <Grid
                        container
                        spacing={1}
                        direction="column"
                        alignItems="flex-start"
                      >
                        <Grid>
                          <Typography level="title-lg">User Story :</Typography>
                        </Grid>
                      </Grid>
                      <Grid>
                        <Button>Upload File</Button>

                        <Typography color="success">
                          haha
                          <Button variant="plain" color="neutral">
                            <Clear fontSize="small" />
                          </Button>
                        </Typography>

                        {/* <FileSelector onFileSelect={handleFileSelect} />
                        <Typography color="danger">{fileError}</Typography>
                        <Typography color="success">
                          {fileUploadConfirmation}
                        </Typography> */}
                      </Grid>
                      <Grid container spacing={1} direction="column">
                        <Grid>
                          <Button>Import from Jira</Button>

                          <Typography color="success">
                            <Button variant="plain" color="neutral">
                              Clear data from Jira {"   "}
                              <Clear fontSize="small" />
                            </Button>
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid sx={{ marginLeft: 14 }}>
                        {" "}
                        <Typography color="danger">kollalo</Typography>
                      </Grid>
                    </Grid>

                    <Grid xs={12} mt={2}>
                      <>
                        {" "}
                        <Divider>Jira</Divider>
                        <Grid
                          sx={{
                            paddingTop: "10px",
                          }}
                        >
                          <Typography level="title-lg">
                            Select Project
                          </Typography>
                        </Grid>
                        <Grid
                          sx={{
                            paddingTop: "15px",
                          }}
                        >
                          <Typography level="title-lg">
                            Select Sprint
                          </Typography>
                        </Grid>
                      </>

                      <Grid
                        sx={{
                          paddingTop: "20px",
                        }}
                        container
                        direction="row"
                        justifyContent="flex-end"
                        alignItems="center"
                      >
                        <Button type="Create" color="success">
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
      {/* <Modal
        open={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        title="Upload File"
      >
        <ModalDialog>
          <ModalClose />
          <Button
            variant="outlined"
            color="neutral"
            onClick={handleDownloadTemplateClick}
          >
            Download Template
          </Button>
          <FileSelector onFileSelect={handleFileSelect} />
          <Typography color="danger">{fileError}</Typography>
          {userFile && (
            <Typography color="success">{fileUploadConfirmation}</Typography>
          )}
        </ModalDialog>
      </Modal> */}
    </Box>
  );
};

export default AddContact;
