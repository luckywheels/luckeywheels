// Get all details
const fs = require("fs");

exports.getDetails = async (req, res) => {
  // Header-Footer Data
  // const data1 = fs.readFileSync("./html/1.html", "utf-8");
  // const html_header = data1.replace(/<\/?(html)[^>]*>/gi, "").trim();

  // const data2 = fs.readFileSync("./html/2.html", "utf-8");
  // const html_footer = data2.replace(/<\/?(html)[^>]*>/gi, "").trim();

  // Header Footer
  const headerFooter = require("../models/header_footer.model");
  const header_footer = await headerFooter.findOne(
    {},
    { _id: 0, __v: 0, status_Id: 0 }
  );
  const header = header_footer.header;
  const footer = header_footer.footer;

  // Opentab Data
  const openTabModel = require("../models/opentab_model");
  const openTabData = await openTabModel.findOne(
    {},
    { _id: 0, __v: 0, urlId: 0 }
  );

  // Default settings
  const defaultSettingsModel = require("../models/default_setting.model");
  const defaultsettings = await defaultSettingsModel.findOne(
    {},
    { _id: 0, __v: 0, urlId: 0 }
  );

  // Version Control
  const versionControlModel = require("../models/version_control.model");
  const versioncontrol = await versionControlModel.findOne(
    {},
    { _id: 0, __v: 0, vcId: 0 }
  );

  // Installed reports
  const HitCount = require("../models/installed_reports_model");
  const installedReports = await HitCount.findOne({}, { _id: 0, __v: 0 });

  // Tray Banner
  const TrayBanner = require("../models/traybanner.model");
  const headerBanner = await TrayBanner.findOne(
    {},
    { _id: 0, __v: 0, tray_Id: 0 }
  );

  // Tray Add Text
  const TrayTextAdd = require("../models/traytextadd.model");
  const traytextadd = await TrayTextAdd.findOne(
    {},
    { _id: 0, __v: 0, textId: 0 }
  );

  // Install Exe
  const InstallExe = require("../models/installexe.model");
  const installExeData = await InstallExe.findOne(
    {},
    { _id: 0, __v: 0, exe_Id: 0 }
  );

  // AutoClick Data
  const AutoClickModel = require("../models/autoclick.model");
  const autoClickData = await AutoClickModel.findOne(
    {},
    { _id: 0, __v: 0, autoClickId: 0 }
  );

  // SearchBox Data
  const SearchBoxModel = require("../models/searchbox.model");
  const searchBoxData = await SearchBoxModel.findOne(
    {},
    { _id: 0, __v: 0, searchBoxId: 0 }
  );

  // MouseCursor Data
  const MouseCursorModel = require("../models/mousecursor.model");
  const mouseCursorData = await MouseCursorModel.findOne(
    {},
    { _id: 0, __v: 0, mouseId: 0 }
  );

  if (
    !header &&
    !footer &&
    !openTabData &&
    !defaultsettings &&
    !installedReports &&
    !versioncontrol &&
    !headerBanner &&
    !traytextadd &&
    !installExeData &&
    !autoClickData &&
    !searchBoxData &&
    !mouseCursorData
  ) {
    res.status(404).send({
      code: 404,
      status: "Not Found",
      header_status: header_footer.header_status,
      header_text: "header data is not available",
      footer_status: header_footer.footer_status,
      footer_text: "footer data is not available",
      header_footer_time: "header footer time not available",
      open_tab_data: "urlData is not available",
      default_settings_data: "Default Settings Data is not available",
      installedReports: "installedReports Data is not available",
      versioncontrol: "versionControl Data is not available",
      headerBanner: "HeaderBanner Data is not available",
      traytextadd: "Tray Text Data is not available",
      install_Exe_Data: "Install Exe Data is not available",
      autoClickData: "AutoClick Data is not available",
      search_box_data: "SearchBox Data is not available",
      mouse_Cursor_Data: "Mouse Cursor Data is not available",
    });
  } else {
    res.status(200).send({
      code: 200,
      status: "Success",
      header_footer_data: {
        header_text: header_footer.header,
        header_status: header_footer.header_status,
        header_time_interval: header_footer.header_time_interval,
        footer_text: header_footer.footer,
        footer_status: header_footer.footer_status,
        footer_time_interval: header_footer.footer_time_interval,
      },
      open_tab_data: openTabData,
      default_settings_data: defaultsettings,
      version_Control_data: versioncontrol,
      installedReports: installedReports,
      headerBanner: headerBanner,
      traytext: traytextadd,
      install_Exe_Data: installExeData,
      auto_Click_Data: autoClickData,
      search_box_data: searchBoxData,
      mouse_Cursor_Data: mouseCursorData,
    });
  }
};
