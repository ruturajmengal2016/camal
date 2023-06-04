import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import DescriptionIcon from "@mui/icons-material/Description";
import CommentIcon from "@mui/icons-material/Comment";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import LockIcon from "@mui/icons-material/Lock";
import SearchIcon from "@mui/icons-material/Search";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import PrintIcon from "@mui/icons-material/Print";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import HighlightIcon from "@mui/icons-material/Highlight";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatLineSpacingIcon from "@mui/icons-material/FormatLineSpacing";
import ChecklistIcon from "@mui/icons-material/Checklist";
interface IDocHeaderProps {}

const DocHeader: React.FunctionComponent<IDocHeaderProps> = () => {
  const [age, setAge] = React.useState<string>("100%");
  const [style, setStyle] = React.useState<string>("Normal text");
  const [font, setFont] = React.useState<string>("Normal text");
  const [format, setFormat] = React.useState<string>("formatleft");
  const [fontSize, setFontSize] = React.useState<number>(10);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleformatChange = (event: SelectChangeEvent) => {
    setFormat(event.target.value as string);
  };
  const handleStyleChange = (event: SelectChangeEvent) => {
    setStyle(event.target.value as string);
  };
  const handlefontChange = (event: SelectChangeEvent) => {
    setFont(event.target.value as string);
  };
  const texts: string[] = [
    "File",
    "Edit",
    "View",
    "Insert",
    "Format",
    "Tools",
    "Extensions",
    "Help",
  ];
  const functionality: {
    title: string;
    icon: JSX.Element;
  }[] = [
    {
      title: "search",
      icon: <SearchIcon />,
    },
    {
      title: "Undo",
      icon: <UndoIcon />,
    },
    {
      title: "Redo",
      icon: <RedoIcon />,
    },
    {
      title: "Print",
      icon: <PrintIcon />,
    },
    {
      title: "Spelling",
      icon: <SpellcheckIcon />,
    },
    {
      title: "Paint Format",
      icon: <FormatPaintIcon />,
    },
    {
      title: "Zoom",
      icon: (
        <Select
          value={age}
          onChange={handleChange}
          size="small"
          defaultValue={age}
        >
          <MenuItem value="10%">10%</MenuItem>
          <MenuItem value="50%">50%</MenuItem>
          <MenuItem value="100%">100%</MenuItem>
        </Select>
      ),
    },
    {
      title: "Style",
      icon: (
        <Select
          value={style}
          onChange={handleStyleChange}
          autoWidth
          size="small"
          defaultValue={style}
        >
          <MenuItem value="Twenty">Twenty</MenuItem>
          <MenuItem value="Normal text">Normal text</MenuItem>
          <MenuItem value="Twenty one">Twenty one</MenuItem>
          <MenuItem value="Twenty one">Twenty one and a half</MenuItem>
        </Select>
      ),
    },
    {
      title: "Font",
      icon: (
        <Select
          value={font}
          onChange={handlefontChange}
          autoWidth
          size="small"
          defaultValue={font}
        >
          <MenuItem value="Twenty">Twenty</MenuItem>
          <MenuItem value="Normal text">Normal text</MenuItem>
          <MenuItem value="Twenty one">Twenty one</MenuItem>
          <MenuItem value="Twenty one">Twenty one and a half</MenuItem>
        </Select>
      ),
    },
    {
      title: "Font size",
      icon: (
        <Box sx={{ display: "flex", gap: "0.2rem", alignItems: "center" }}>
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              setFontSize(fontSize + 1);
            }}
          >
            <AddIcon />
          </IconButton>
          <Typography
            variant="body1"
            border="1px solid black"
            sx={{
              boxSizing: "border-box",
              padding: "0.2rem",
            }}
          >
            {fontSize}
          </Typography>
          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              if (fontSize > 0) setFontSize(fontSize - 1);
            }}
          >
            <RemoveIcon />
          </IconButton>
        </Box>
      ),
    },
    {
      title: "Bold",
      icon: <FormatBoldIcon />,
    },
    {
      title: "Italic",
      icon: <FormatItalicIcon />,
    },
    {
      title: "Underline",
      icon: <FormatUnderlinedIcon />,
    },
    {
      title: "Text Color",
      icon: <FormatColorTextIcon />,
    },
    {
      title: "Highlight Color",
      icon: <HighlightIcon />,
    },
    {
      title: "Insert link",
      icon: <InsertLinkIcon />,
    },
    {
      title: "Insert image",
      icon: <AddPhotoAlternateIcon />,
    },
    {
      title: "Align",
      icon: (
        <Select
          value={format}
          onChange={handleformatChange}
          autoWidth
          size="small"
          defaultValue={format}
        >
          <MenuItem value="formatleft">
            <FormatAlignLeftIcon sx={{ fontSize: "1rem" }} />
          </MenuItem>
          <MenuItem value="formatcenter">
            <FormatAlignCenterIcon sx={{ fontSize: "1rem" }} />
          </MenuItem>
          <MenuItem value="formatjustify">
            <FormatAlignJustifyIcon sx={{ fontSize: "1rem" }} />
          </MenuItem>
          <MenuItem value="formatright">
            <FormatAlignRightIcon sx={{ fontSize: "1rem" }} />
          </MenuItem>
        </Select>
      ),
    },
    {
      title: "Line & spacing",
      icon: <FormatLineSpacingIcon />,
    },
    {
      title: "Checklist",
      icon: <ChecklistIcon />,
    },
  ];
  return (
    <Box
      height="20%"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        padding: "1rem",
      }}
    >
      <Box
        height="50%"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flex: 0.2,
            height: "100%",
          }}
        >
          <IconButton>
            <DescriptionIcon
              sx={{
                color: "#2196f3",
                fontSize: "2.5rem",
              }}
            />
          </IconButton>
        </Box>

        <Box
          sx={{
            flex: 3.5,

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            height: "100%",
          }}
        >
          <TextField
            hiddenLabel
            sx={{
              border: 0,
              outline: 0,
            }}
            id="filled-hidden-label-small"
            defaultValue="Untitled Document"
            variant="outlined"
            size="small"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {texts.map((text, index) => {
              return (
                <Button
                  key={index}
                  size="medium"
                  sx={{
                    textTransform: "none",
                    color: "black",
                    fontWeight: "",
                  }}
                >
                  {text}
                </Button>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1.5,

            padding: "0.2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <IconButton>
            <CommentIcon sx={{ fontSize: "1.8rem" }} />
          </IconButton>
          <IconButton>
            <VideoChatIcon sx={{ fontSize: "1.8rem" }} />
          </IconButton>
          <Button
            variant="contained"
            startIcon={<LockIcon />}
            sx={{
              borderRadius: "1rem",
              backgroundColor: "lightblue",
              textTransform: "none",
              boxShadow: "none",
            }}
          >
            Share
          </Button>
          <IconButton>
            <Avatar />
          </IconButton>
        </Box>
      </Box>
      <Box
        height="50%"
        component="div"
        sx={{
          backgroundColor: "#e3f2fd",
          width: "100%",
          height: "100%",
          borderRadius: "2rem",
          padding: "0.2rem",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {functionality.map((functions, index) => {
          return (
            <IconButton key={index} sx={{ color: "black" }}>
              <Tooltip title={functions.title}>{functions.icon}</Tooltip>
            </IconButton>
          );
        })}
      </Box>
    </Box>
  );
};

export default DocHeader;
