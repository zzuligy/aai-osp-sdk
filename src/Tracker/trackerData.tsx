import type {
  UserAnalyticsEventNames,
  LegacyTrackedEventNames,
  AnalyticsTrackedEventNames,
  AnalyticsEventProperties,
} from '~types/tracker'

export const integratorTrackedEvents = new Map<
  LegacyTrackedEventNames,
  UserAnalyticsEventNames
>([
  ['screen_welcome', 'WELCOME'],
  ['screen_userConsent', 'USER_CONSENT'],
  ['screen_document_front_capture_file_upload', 'DOCUMENT_CAPTURE_FRONT'],
  ['screen_document_front_confirmation', 'DOCUMENT_CAPTURE_CONFIRMATION_FRONT'],
  ['screen_document_back_capture_file_upload', 'DOCUMENT_CAPTURE_BACK'],
  ['screen_document_back_confirmation', 'DOCUMENT_CAPTURE_CONFIRMATION_BACK'],
  ['screen_face_selfie_intro', 'FACIAL_INTRO'],
  ['screen_face_selfie_capture', 'FACIAL_CAPTURE'],
  ['screen_face_selfie_confirmation', 'FACIAL_CAPTURE_CONFIRMATION'],
  ['screen_face_video_intro', 'VIDEO_FACIAL_INTRO'],
  ['screen_face_video_capture_step_1', 'VIDEO_FACIAL_CAPTURE_STEP_1'],
  ['screen_face_video_capture_step_2', 'VIDEO_FACIAL_CAPTURE_STEP_2'],
  ['screen_document_type_select', 'DOCUMENT_TYPE_SELECT'],
  ['screen_document_country_select', 'ID_DOCUMENT_COUNTRY_SELECT'],
  ['screen_crossDevice', 'CROSS_DEVICE_INTRO'],
  ['screen_crossDevice_crossdevice_link', 'CROSS_DEVICE_GET_LINK'],
  ['Starting upload', 'UPLOAD'],
])

// TODO: Add typings using the objects in the comments
// Using any becaus of this ts bug https://github.com/microsoft/TypeScript/pull/43396
// @ts-ignore
export const analyticsEventsMapping = new Map<
  LegacyTrackedEventNames,
  {
    eventName: AnalyticsTrackedEventNames
    properties: AnalyticsEventProperties
  }
>([
  [
    'screen_complete',
    {
      eventName: 'COMPLETE',
      properties: {
        eventType: 'screen',
      },
    },
  ],
  [
    'screen_complete_crossdevice_mobile_success',
    {
      eventName: 'COMPLETE_CROSS_DEVICE_MOBILE_SUCCESS',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_document_country_select',
    {
      eventName: 'COUNTRY_SELECTION',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_document_crossDevice_client_intro',
    {
      eventName: 'CROSS_DEVICE_CLIENT_INTRO',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_face_crossDevice_client_intro',
    {
      eventName: 'CROSS_DEVICE_CLIENT_INTRO',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_poa_crossDevice_client_intro',
    {
      eventName: 'CROSS_DEVICE_CLIENT_INTRO',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_crossDevice_desktop_submit',
    {
      eventName: 'CROSS_DEVICE_DESKTOP_SUBMIT',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_crossDevice_crossdevice_link',
    {
      eventName: 'CROSS_DEVICE_GET_LINK',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_crossDevice',
    {
      eventName: 'CROSS_DEVICE_INTRO',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'copy link selected',
    {
      eventName: 'CROSS_DEVICE_LINK_METHOD_SELECTED',
      properties: { eventType: 'action', link_method_selected: 'copy' },
    },
  ],
  [
    'qr code selected',
    {
      eventName: 'CROSS_DEVICE_LINK_METHOD_SELECTED',
      properties: { eventType: 'action', link_method_selected: 'qr_code' },
    },
  ],
  [
    'sms selected',
    {
      eventName: 'CROSS_DEVICE_LINK_METHOD_SELECTED',
      properties: { eventType: 'action', link_method_selected: 'sms' },
    },
  ],
  [
    'screen_crossDevice_mobile_notification_sent',
    {
      eventName: 'CROSS_DEVICE_MOBILE_NOTIFICATION_SENT',
      properties: { eventType: 'action' },
    },
  ],
  [
    'screen_crossDevice_mobile_connected',
    {
      eventName: 'CROSS_DEVICE_MOBILE_SUBMIT',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_crossDevice_sms_failed',
    {
      eventName: 'CROSS_DEVICE_SMS_FAILED',
      properties: { eventType: 'view' },
    },
  ],
  [
    'Starting upload',
    {
      eventName: 'CUSTOM_API_REQUEST_STARTED',
      properties: { eventType: 'flow' },
    },
  ],
  [
    'screen_document_back_capture_camera_error',
    {
      eventName: 'DOCUMENT_CAMERA_ERROR',
      properties: { eventType: 'view', document_side: 'back' },
    },
  ],
  [
    'screen_document_front_capture_camera_error',
    {
      eventName: 'DOCUMENT_CAMERA_ERROR',

      properties: { eventType: 'view', document_side: 'front' },
    },
  ],
  [
    'Taking live photo of document',
    {
      eventName: 'DOCUMENT_CAMERA_SHUTTER_CLICK',

      properties: { eventType: 'action', capture_method_rendered: 'camera' },
    },
  ],
  [
    'screen_document_back_capture_file_upload',
    {
      eventName: 'DOCUMENT_CAPTURE',

      properties: { eventType: 'screen', document_side: 'back' },
    },
  ],
  [
    'screen_document_back_capture',
    {
      eventName: 'DOCUMENT_CAPTURE',

      properties: { eventType: 'screen', document_side: 'front' },
    },
  ],
  [
    'screen_document_front_capture_file_upload',
    {
      eventName: 'DOCUMENT_CAPTURE',

      properties: { eventType: 'screen', capture_method_rendered: 'upload' },
    },
  ],
  [
    'screen_document_front_capture',
    {
      eventName: 'DOCUMENT_CAPTURE',

      properties: { eventType: 'screen', document_side: 'front' },
    },
  ],
  [
    'screen_document_back_confirmation',
    {
      eventName: 'DOCUMENT_CONFIRMATION',

      properties: { eventType: 'screen', document_side: 'back' },
    },
  ],
  [
    'screen_document_front_confirmation',
    {
      eventName: 'DOCUMENT_CONFIRMATION',

      properties: { eventType: 'screen', document_side: 'front' },
    },
  ],
  [
    'screen_document_fallback_clicked',
    {
      eventName: 'DOCUMENT_FALLBACK_CLICKED',
      properties: { eventType: 'action' },
    },
  ],
  [
    'screen_document_image_quality_guide',
    {
      eventName: 'DOCUMENT_IMAGE_QUALITY_GUIDE',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_document_type_select',
    {
      eventName: 'DOCUMENT_TYPE_SELECTION',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_document_document_video_capture_file_upload',
    {
      eventName: 'DOCUMENT_VIDEO_CAPTURE',

      properties: { eventType: 'screen', capture_method_rendered: 'upload' },
    },
  ],
  [
    'screen_document_document_video_capture',
    {
      eventName: 'DOCUMENT_VIDEO_CAPTURE',

      properties: { eventType: 'screen', capture_method_rendered: 'camera' },
    },
  ],
  [
    'screen_document_document_video_capture_fallback_triggered',
    {
      eventName: 'DOCUMENT_VIDEO_FALLBACK_TRIGGERED',
      properties: { eventType: 'action' },
    },
  ],
  [
    'screen_face_selfie_intro',
    { eventName: 'FACE_INTRO', properties: { eventType: 'screen' } },
  ],
  [
    'screen_face_selfie_capture_camera_error',
    {
      eventName: 'FACE_SELFIE_CAMERA_ERROR',
      properties: { eventType: 'view' },
    },
  ],
  [
    'screen_face_selfie_capture_file_upload',
    {
      eventName: 'FACE_SELFIE_CAPTURE',

      properties: { eventType: 'screen', capture_method_rendered: 'upload' },
    },
  ],
  [
    'screen_face_selfie_capture',
    {
      eventName: 'FACE_SELFIE_CAPTURE',

      properties: { eventType: 'screen', capture_method_rendered: 'camera' },
    },
  ],
  [
    'screen_face_selfie_confirmation',
    {
      eventName: 'FACE_SELFIE_CONFIRMATION',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_face_selfie_capture_fallback_triggered',
    {
      eventName: 'FACE_SELFIE_FALLBACK_TRIGGERED',
      properties: { eventType: 'action' },
    },
  ],
  [
    'Snapshot upload completed',
    {
      eventName: 'FACE_SELFIE_SNAPSHOT_UPLOAD_COMPLETED',
      properties: { eventType: 'flow' },
    },
  ],
  [
    'Starting snapshot upload',
    {
      eventName: 'FACE_SELFIE_SNAPSHOT_UPLOAD_STARTED',
      properties: { eventType: 'flow' },
    },
  ],
  [
    'Starting live photo upload',
    {
      eventName: 'FACE_SELFIE_UPLOAD_STARTED',

      properties: { eventType: 'flow', capture_method_rendered: 'camera' },
    },
  ],
  [
    'screen_face_face_video_capture_camera_error',
    {
      eventName: 'FACE_VIDEO_CAMERA_ERROR',
      properties: { eventType: 'view' },
    },
  ],
  [
    'screen_face_face_video_capture_file_upload',
    {
      eventName: 'FACE_VIDEO_CAPTURE',

      properties: { eventType: 'screen', capture_method_rendered: 'upload' },
    },
  ],
  [
    'screen_face_face_video_capture',
    {
      eventName: 'FACE_VIDEO_CAPTURE',

      properties: { eventType: 'screen', capture_method_rendered: 'camera' },
    },
  ],
  [
    'screen_face_video_capture_step_1',
    {
      eventName: 'FACE_VIDEO_CAPTURE',

      properties: { eventType: 'screen', video_capture_step: 'step1' },
    },
  ],
  [
    'screen_face_video_capture_step_2',
    {
      eventName: 'FACE_VIDEO_CAPTURE',

      properties: { eventType: 'screen', video_capture_step: 'step2' },
    },
  ],
  [
    'screen_face_video_challenge_load_failed',
    {
      eventName: 'FACE_VIDEO_CHALLENGE_FETCH_ERROR',
      properties: { eventType: 'flow' },
    },
  ],
  [
    'screen_face_video_challenge_loaded',
    {
      eventName: 'FACE_VIDEO_CHALLENGE_LOADED',
      properties: { eventType: 'flow' },
    },
  ],
  [
    'screen_face_video_challenge_requested',
    {
      eventName: 'FACE_VIDEO_CHALLENGE_REQUESTED',
      properties: { eventType: 'flow' },
    },
  ],
  [
    'screen_face_face_video_confirmation',
    {
      eventName: 'FACE_VIDEO_CONFIRMATION',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_face_face_video_capture_fallback_triggered',
    {
      eventName: 'FACE_VIDEO_FALLBACK_TRIGGERED',
      properties: { eventType: 'action' },
    },
  ],
  [
    'screen_face_video_intro',
    {
      eventName: 'FACE_VIDEO_INTRO',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'completed flow',
    { eventName: 'FLOW_COMPLETED', properties: { eventType: 'flow' } },
  ],
  [
    'started flow',
    { eventName: 'FLOW_STARTED', properties: { eventType: 'flow' } },
  ],
  [
    'screen_forbidden_client_error',
    {
      eventName: 'FORBIDDEN_CLIENT_ERROR',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_generic_client_error',
    {
      eventName: 'GENERIC_CLIENT_ERROR',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_interrupted_flow_error',
    {
      eventName: 'INTERRUPTED_FLOW_ERROR',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_poa_poa_file_upload',
    {
      eventName: 'POA_CAPTURE',

      properties: { eventType: 'screen', capture_method_rendered: 'upload' },
    },
  ],
  [
    'screen_poa_poa',
    {
      eventName: 'POA_CAPTURE_POA',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_poa_front_confirmation',
    {
      eventName: 'POA_CONFIRMATION',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_poa_type_select',
    {
      eventName: 'POA_DOCUMENT_TYPE_SELECTION',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_poa',
    { eventName: 'POA_INTRO', properties: { eventType: 'screen' } },
  ],
  [
    'screen_unsupported_android_browser',
    {
      eventName: 'UNSUPPORTED_BROWSER',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'screen_unsupported_ios_browser',
    {
      eventName: 'UNSUPPORTED_BROWSER',
      properties: { eventType: 'screen' },
    },
  ],
  [
    'Completed upload',
    {
      eventName: 'UPLOAD_COMPLETED',
      properties: { eventType: 'action' },
    },
  ],
  [
    'screen_userConsent',
    { eventName: 'USER_CONSENT', properties: { eventType: 'screen' } },
  ],
  [
    'screen_welcome',
    { eventName: 'WELCOME', properties: { eventType: 'screen' } },
  ],
])
