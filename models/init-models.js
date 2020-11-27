var DataTypes = require("sequelize").DataTypes;
var _site_slots = require("./site_slots");
var _tbl_api_token = require("./tbl_api_token");
var _tbl_authorize_details = require("./tbl_authorize_details");
var _tbl_charger = require("./tbl_charger");
var _tbl_charger_capabilities = require("./tbl_charger_capabilities");
var _tbl_charger_connector = require("./tbl_charger_connector");
var _tbl_config = require("./tbl_config");
var _tbl_heartbeat = require("./tbl_heartbeat");
var _tbl_heartbeat_log = require("./tbl_heartbeat_log");
var _tbl_manage_column = require("./tbl_manage_column");
var _tbl_metervalues = require("./tbl_metervalues");
var _tbl_ovplogin = require("./tbl_ovplogin");
var _tbl_rfid = require("./tbl_rfid");
var _tbl_session_report = require("./tbl_session_report");
var _tbl_site_division = require("./tbl_site_division");
var _tbl_site_groups = require("./tbl_site_groups");
var _tbl_site_region = require("./tbl_site_region");
var _tbl_sites = require("./tbl_sites");
var _tbl_states = require("./tbl_states");
var _tbl_status_notification = require("./tbl_status_notification");
var _tbl_transaction = require("./tbl_transaction");
var _tbl_transaction_type = require("./tbl_transaction_type");
var _tbl_user = require("./tbl_user");
var _tbl_user_manage = require("./tbl_user_manage");

function initModels(sequelize) {
  var site_slots = _site_slots(sequelize, DataTypes);
  var tbl_api_token = _tbl_api_token(sequelize, DataTypes);
  var tbl_authorize_details = _tbl_authorize_details(sequelize, DataTypes);
  var tbl_charger = _tbl_charger(sequelize, DataTypes);
  var tbl_charger_capabilities = _tbl_charger_capabilities(sequelize, DataTypes);
  var tbl_charger_connector = _tbl_charger_connector(sequelize, DataTypes);
  var tbl_config = _tbl_config(sequelize, DataTypes);
  var tbl_heartbeat = _tbl_heartbeat(sequelize, DataTypes);
  var tbl_heartbeat_log = _tbl_heartbeat_log(sequelize, DataTypes);
  var tbl_manage_column = _tbl_manage_column(sequelize, DataTypes);
  var tbl_metervalues = _tbl_metervalues(sequelize, DataTypes);
  var tbl_ovplogin = _tbl_ovplogin(sequelize, DataTypes);
  var tbl_rfid = _tbl_rfid(sequelize, DataTypes);
  var tbl_session_report = _tbl_session_report(sequelize, DataTypes);
  var tbl_site_division = _tbl_site_division(sequelize, DataTypes);
  var tbl_site_groups = _tbl_site_groups(sequelize, DataTypes);
  var tbl_site_region = _tbl_site_region(sequelize, DataTypes);
  var tbl_sites = _tbl_sites(sequelize, DataTypes);
  var tbl_states = _tbl_states(sequelize, DataTypes);
  var tbl_status_notification = _tbl_status_notification(sequelize, DataTypes);
  var tbl_transaction = _tbl_transaction(sequelize, DataTypes);
  var tbl_transaction_type = _tbl_transaction_type(sequelize, DataTypes);
  var tbl_user = _tbl_user(sequelize, DataTypes);
  var tbl_user_manage = _tbl_user_manage(sequelize, DataTypes);


  return {
    site_slots,
    tbl_api_token,
    tbl_authorize_details,
    tbl_charger,
    tbl_charger_capabilities,
    tbl_charger_connector,
    tbl_config,
    tbl_heartbeat,
    tbl_heartbeat_log,
    tbl_manage_column,
    tbl_metervalues,
    tbl_ovplogin,
    tbl_rfid,
    tbl_session_report,
    tbl_site_division,
    tbl_site_groups,
    tbl_site_region,
    tbl_sites,
    tbl_states,
    tbl_status_notification,
    tbl_transaction,
    tbl_transaction_type,
    tbl_user,
    tbl_user_manage,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
